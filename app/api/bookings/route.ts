import { getDb } from '@/lib/db';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const db = getDb();
    await db.execute(`
      CREATE TABLE IF NOT EXISTS bookings (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT,
        preferred_date TEXT,
        lesson_type TEXT,
        skill_level TEXT,
        time_slot TEXT,
        created_at TEXT DEFAULT (datetime('now'))
      )
    `);

    const { rows } = await db.execute('SELECT * FROM bookings ORDER BY created_at DESC');
    return NextResponse.json(rows);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
  }
}

export async function POST(req: Request) {
  try {
    const db = getDb();
    await db.execute(`
      CREATE TABLE IF NOT EXISTS bookings (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT,
        preferred_date TEXT,
        lesson_type TEXT,
        skill_level TEXT,
        time_slot TEXT,
        created_at TEXT DEFAULT (datetime('now'))
      )
    `);

    const body = await req.json();

    await db.execute({
      sql: 'INSERT INTO bookings (name, email, phone, preferred_date, lesson_type, skill_level, time_slot) VALUES (?, ?, ?, ?, ?, ?, ?)',
      args: [
        body.name,
        body.email,
        body.phone ?? null,
        body.preferred_date ?? null,
        body.lesson_type ?? null,
        body.skill_level ?? null,
        body.time_slot ?? null,
      ],
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
  }
}
