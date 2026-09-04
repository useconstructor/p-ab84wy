import { createClient, type Client } from '@libsql/client';

let db: Client | null = null;

export function getDb(): Client {
  if (!db) {
    const url = process.env.TURSO_DATABASE_URL;
    if (!url) {
      throw new Error('TURSO_DATABASE_URL is not configured');
    }
    db = createClient({
      url,
      authToken: process.env.TURSO_AUTH_TOKEN,
    });
  }
  return db;
}
