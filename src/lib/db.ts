import Database from 'better-sqlite3';
import fs from 'fs';
import path from 'path';

// Ensure data directory exists
const dbDir = path.join(process.cwd(), 'data');
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

// Create or connect to the SQLite database
const dbPath = path.join(dbDir, 'stox.db');
const db = new Database(dbPath);

// Initialize the newsletters table if it doesn't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS newsletter_subscribers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`);

// Add a subscriber to the newsletter
export function addNewsletterSubscriber(email: string): { success: boolean; message: string } {
  try {
    const stmt = db.prepare('INSERT INTO newsletter_subscribers (email) VALUES (?)');
    stmt.run(email);
    return { success: true, message: 'Subscription successful' };
  } catch (error: any) {
    // Handle duplicate emails
    if (error.message.includes('UNIQUE constraint failed')) {
      return { success: false, message: 'Dit e-mailadres is al aangemeld' };
    }
    console.error('Database error:', error);
    return { success: false, message: 'Er is een fout opgetreden. Probeer het later opnieuw.' };
  }
}

// Check if an email is already subscribed
export function isSubscribed(email: string): boolean {
  try {
    const stmt = db.prepare('SELECT email FROM newsletter_subscribers WHERE email = ?');
    const result = stmt.get(email);
    return !!result;
  } catch (error) {
    console.error('Database error:', error);
    return false;
  }
}

// Get all newsletter subscribers
export function getAllSubscribers(): { email: string; created_at: string }[] {
  try {
    const stmt = db.prepare('SELECT email, created_at FROM newsletter_subscribers ORDER BY created_at DESC');
    return stmt.all();
  } catch (error) {
    console.error('Database error:', error);
    return [];
  }
}

// Delete a subscriber from the newsletter
export function deleteSubscriber(email: string): { success: boolean; message: string } {
  try {
    const stmt = db.prepare('DELETE FROM newsletter_subscribers WHERE email = ?');
    const result = stmt.run(email);
    
    if (result.changes > 0) {
      return { success: true, message: 'Subscriber deleted successfully' };
    } else {
      return { success: false, message: 'Subscriber not found' };
    }
  } catch (error) {
    console.error('Database error:', error);
    return { success: false, message: 'Er is een fout opgetreden. Probeer het later opnieuw.' };
  }
}

export default db; 