/*
  # Initial Schema Setup

  1. New Tables
    - `prayers`: Stores prayer content and statistics
      - `id` (uuid, primary key)
      - `title` (text)
      - `content` (text)
      - `views` (integer)
      - `pray_count` (integer)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `profiles`: Stores user profiles and admin status
      - `id` (uuid, primary key, references auth.users)
      - `username` (text)
      - `is_admin` (boolean)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on both tables
    - Add policies for public read access to prayers
    - Add policies for admin access to both tables
*/

-- Create prayers table
CREATE TABLE IF NOT EXISTS prayers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  views integer DEFAULT 0,
  pray_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id),
  username text UNIQUE NOT NULL,
  is_admin boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE prayers ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Policies for prayers
CREATE POLICY "Allow public read access" 
  ON prayers 
  FOR SELECT 
  TO public 
  USING (true);

CREATE POLICY "Allow admin full access" 
  ON prayers 
  FOR ALL 
  TO authenticated 
  USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.is_admin = true
    )
  );

-- Policies for profiles
CREATE POLICY "Allow users to read own profile" 
  ON profiles 
  FOR SELECT 
  TO authenticated 
  USING (auth.uid() = id);

CREATE POLICY "Allow admin to manage profiles" 
  ON profiles 
  FOR ALL 
  TO authenticated 
  USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.is_admin = true
    )
  );

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger for updating updated_at
CREATE TRIGGER update_prayers_updated_at
  BEFORE UPDATE ON prayers
  FOR EACH ROW
  EXECUTE PROCEDURE update_updated_at_column();