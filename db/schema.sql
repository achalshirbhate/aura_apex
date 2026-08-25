-- Aura Apex Database Schema (PostgreSQL)
-- Table for storing 1-on-1 Product Demo Bookings

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

-- Index for fast lookup on slot availability
CREATE INDEX IF NOT EXISTS idx_demo_bookings_date_time ON demo_bookings(booking_date, booking_time);
