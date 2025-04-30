import fs from 'fs';
import path from 'path';
import { cookies } from 'next/headers';

// In-memory storage for production/serverless environments
let inMemorySubscribers = new Map<string, { email: string; created_at: string }>();

// Check if we're in production (deployed) environment
const isProduction = process.env.NODE_ENV === 'production';

// Cookie name for storing subscribers
const SUBSCRIBERS_COOKIE = 'newsletter_subscribers';

// Save subscribers to a cookie
function saveSubscribersToCookie(subscribers: Array<{ email: string; created_at: string }>) {
  try {
    const cookieStore = cookies();
    const subscribersJson = JSON.stringify(subscribers);
    
    // Set cookie with a 10-year expiry
    cookieStore.set({
      name: SUBSCRIBERS_COOKIE,
      value: subscribersJson,
      httpOnly: true,
      path: '/',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 365 * 10, // 10 years
    });
    
    console.log('Subscribers saved to cookie');
  } catch (error) {
    console.error('Error saving subscribers to cookie:', error);
  }
}

// Load subscribers from cookie
function loadSubscribersFromCookie(): Array<{ email: string; created_at: string }> {
  try {
    const cookieStore = cookies();
    const subscribersCookie = cookieStore.get(SUBSCRIBERS_COOKIE);
    
    if (subscribersCookie && subscribersCookie.value) {
      const subscribers = JSON.parse(subscribersCookie.value);
      console.log(`Loaded ${subscribers.length} subscribers from cookie`);
      return subscribers;
    }
  } catch (error) {
    console.error('Error loading subscribers from cookie:', error);
  }
  
  return [];
}

// Initialize in-memory subscribers from cookie in production
function initSubscribersFromCookie() {
  try {
    if (isProduction) {
      const subscribers = loadSubscribersFromCookie();
      
      inMemorySubscribers = new Map();
      subscribers.forEach((sub: { email: string; created_at: string }) => {
        inMemorySubscribers.set(sub.email, sub);
      });
      
      console.log(`Initialized ${subscribers.length} subscribers from cookie`);
    }
  } catch (error) {
    console.error('Error initializing subscribers from cookie:', error);
  }
}

let db: any = null;

// Only use SQLite in development
if (!isProduction) {
  try {
    const Database = require('better-sqlite3');
    
    // Ensure data directory exists
    const dbDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dbDir)) {
      fs.mkdirSync(dbDir, { recursive: true });
    }
    
    // Create or connect to the SQLite database
    const dbPath = path.join(dbDir, 'stox.db');
    db = new Database(dbPath);
    
    // Initialize the newsletters table if it doesn't exist
    db.exec(`
      CREATE TABLE IF NOT EXISTS newsletter_subscribers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    
    console.log('SQLite database initialized for development');
  } catch (error) {
    console.error('Failed to initialize SQLite:', error);
    // Fall back to in-memory if SQLite fails
    db = null;
  }
} else {
  // In production, initialize from cookie
  initSubscribersFromCookie();
}

// Add a subscriber to the newsletter
export function addNewsletterSubscriber(email: string): { success: boolean; message: string } {
  try {
    // Use in-memory storage in production or if SQLite failed to initialize
    if (isProduction || !db) {
      // Initialize from cookie first
      if (isProduction) {
        initSubscribersFromCookie();
      }
      
      // Check if already exists
      if (inMemorySubscribers.has(email)) {
        return { success: false, message: 'Dit e-mailadres is al aangemeld' };
      }
      
      // Add to in-memory map
      inMemorySubscribers.set(email, { 
        email, 
        created_at: new Date().toISOString() 
      });
      
      // Save to cookie for persistence
      if (isProduction) {
        saveSubscribersToCookie(Array.from(inMemorySubscribers.values()));
      }
      
      console.log(`Newsletter subscriber added: ${email}`);
      return { success: true, message: 'Subscription successful' };
    } else {
      // Use SQLite in development
      const stmt = db.prepare('INSERT INTO newsletter_subscribers (email) VALUES (?)');
      stmt.run(email);
      return { success: true, message: 'Subscription successful' };
    }
  } catch (error: any) {
    // Handle duplicate emails
    if (error.message && error.message.includes('UNIQUE constraint failed')) {
      return { success: false, message: 'Dit e-mailadres is al aangemeld' };
    }
    console.error('Database error:', error);
    return { success: false, message: 'Er is een fout opgetreden. Probeer het later opnieuw.' };
  }
}

// Check if an email is already subscribed
export function isSubscribed(email: string): boolean {
  try {
    if (isProduction || !db) {
      // Initialize from cookie in production
      if (isProduction) {
        initSubscribersFromCookie();
      }
      
      return inMemorySubscribers.has(email);
    } else {
      const stmt = db.prepare('SELECT email FROM newsletter_subscribers WHERE email = ?');
      const result = stmt.get(email);
      return !!result;
    }
  } catch (error) {
    console.error('Database error:', error);
    return false;
  }
}

// Get all newsletter subscribers
export function getAllSubscribers(): { email: string; created_at: string }[] {
  try {
    if (isProduction || !db) {
      // Initialize from cookie in production
      if (isProduction) {
        initSubscribersFromCookie();
      }
      
      return Array.from(inMemorySubscribers.values());
    } else {
      const stmt = db.prepare('SELECT email, created_at FROM newsletter_subscribers ORDER BY created_at DESC');
      return stmt.all() as { email: string; created_at: string }[];
    }
  } catch (error) {
    console.error('Database error:', error);
    return [];
  }
}

// Delete a subscriber from the newsletter
export function deleteSubscriber(email: string): { success: boolean; message: string } {
  try {
    if (isProduction || !db) {
      // Initialize from cookie in production
      if (isProduction) {
        initSubscribersFromCookie();
      }
      
      if (inMemorySubscribers.has(email)) {
        inMemorySubscribers.delete(email);
        
        // Save changes to cookie
        if (isProduction) {
          saveSubscribersToCookie(Array.from(inMemorySubscribers.values()));
        }
        
        return { success: true, message: 'Subscriber deleted successfully' };
      } else {
        return { success: false, message: 'Subscriber not found' };
      }
    } else {
      const stmt = db.prepare('DELETE FROM newsletter_subscribers WHERE email = ?');
      const result = stmt.run(email);
      
      if (result.changes > 0) {
        return { success: true, message: 'Subscriber deleted successfully' };
      } else {
        return { success: false, message: 'Subscriber not found' };
      }
    }
  } catch (error) {
    console.error('Database error:', error);
    return { success: false, message: 'Er is een fout opgetreden. Probeer het later opnieuw.' };
  }
}

export default db; 