import fs from 'fs';
import path from 'path';

// In-memory storage for production/serverless environments
// Use a more persistent approach
let inMemorySubscribers = new Map<string, { email: string; created_at: string }>();

// Check if we're in production (deployed) environment
const isProduction = process.env.NODE_ENV === 'production';

// For persisting data in a serverless environment
// This will save data to a JSON file in /tmp which persists for the instance lifetime
const STORAGE_FILE = process.env.NODE_ENV === 'production' 
  ? '/tmp/newsletter_subscribers.json' 
  : path.join(process.cwd(), 'data', 'subscribers_backup.json');

function saveSubscribersToFile() {
  try {
    const subscribers = Array.from(inMemorySubscribers.values());
    fs.writeFileSync(STORAGE_FILE, JSON.stringify(subscribers));
    console.log('Subscribers saved to file');
  } catch (error) {
    console.error('Error saving subscribers to file:', error);
  }
}

function loadSubscribersFromFile() {
  try {
    if (fs.existsSync(STORAGE_FILE)) {
      const data = fs.readFileSync(STORAGE_FILE, 'utf8');
      const subscribers = JSON.parse(data);
      
      // Convert to Map
      inMemorySubscribers = new Map();
      subscribers.forEach((sub: { email: string; created_at: string }) => {
        inMemorySubscribers.set(sub.email, sub);
      });
      
      console.log(`Loaded ${subscribers.length} subscribers from file`);
    }
  } catch (error) {
    console.error('Error loading subscribers from file:', error);
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
  // In production, try to load data from file
  loadSubscribersFromFile();
}

// Add a subscriber to the newsletter
export function addNewsletterSubscriber(email: string): { success: boolean; message: string } {
  try {
    // Use in-memory storage in production or if SQLite failed to initialize
    if (isProduction || !db) {
      // Check if already exists
      if (inMemorySubscribers.has(email)) {
        return { success: false, message: 'Dit e-mailadres is al aangemeld' };
      }
      
      inMemorySubscribers.set(email, { 
        email, 
        created_at: new Date().toISOString() 
      });
      
      // Save to file for persistence
      saveSubscribersToFile();
      
      console.log(`Newsletter subscriber added in-memory: ${email}`);
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
      // Try to load fresh data first
      if (isProduction) {
        loadSubscribersFromFile();
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
      // Try to load fresh data first in production
      if (isProduction) {
        loadSubscribersFromFile();
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
      if (inMemorySubscribers.has(email)) {
        inMemorySubscribers.delete(email);
        
        // Save changes to file
        saveSubscribersToFile();
        
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