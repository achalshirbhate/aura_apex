import { Pool } from '@neondatabase/serverless';

// Table initialization DDL for automatic schema creation
const INIT_SCHEMA_SQL = `
CREATE TABLE IF NOT EXISTS demo_bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id VARCHAR(50) UNIQUE NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  work_email VARCHAR(255) NOT NULL,
  company_name VARCHAR(255) NOT NULL,
  team_size VARCHAR(50) NOT NULL,
  booking_date VARCHAR(50) NOT NULL,
  booking_time VARCHAR(50) NOT NULL,
  status VARCHAR(50) DEFAULT 'CONFIRMED',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT unique_booking_date_time UNIQUE (booking_date, booking_time)
);
CREATE INDEX IF NOT EXISTS idx_demo_bookings_date_time ON demo_bookings(booking_date, booking_time);
`;

let pool: Pool | null = null;
let isInitialized = false;

/**
 * Get or initialize serverless Neon PostgreSQL Connection Pool
 */
export function getPool(): Pool {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error('DATABASE_URL environment variable is not configured. Please set DATABASE_URL in Vercel settings.');
  }

  if (!pool) {
    pool = new Pool({ connectionString });
  }

  return pool;
}

/**
 * Execute parameterized SQL query safely against Neon PostgreSQL database
 */
export async function executeQuery<T = any>(sql: string, params: any[] = []): Promise<T[]> {
  const client = getPool();

  // Run schema auto-init once per instance if needed
  if (!isInitialized) {
    try {
      await client.query(INIT_SCHEMA_SQL);
      isInitialized = true;
    } catch (err) {
      console.warn('Database schema auto-init notice:', err);
    }
  }

  // Execute parameterized query to eliminate SQL injection risks
  const result = await client.query(sql, params);
  return result.rows as T[];
}
