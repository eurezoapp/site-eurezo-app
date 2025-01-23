/*
  # Add Pages and Ads Management

  1. New Tables
    - `pages`
      - `id` (uuid, primary key)
      - `title` (text)
      - `content` (text)
      - `slug` (text, unique)
      - `views` (integer)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
      
    - `ads`
      - `id` (uuid, primary key)
      - `name` (text)
      - `code` (text)
      - `location` (text)
      - `active` (boolean)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on new tables
    - Add policies for admin access
*/

-- Create pages table
CREATE TABLE IF NOT EXISTS pages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  slug text UNIQUE NOT NULL,
  views integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create ads table
CREATE TABLE IF NOT EXISTS ads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  code text NOT NULL,
  location text NOT NULL,
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE ads ENABLE ROW LEVEL SECURITY;

-- Policies for pages
CREATE POLICY "Allow public read access to pages" 
  ON pages 
  FOR SELECT 
  TO public 
  USING (true);

CREATE POLICY "Allow admin full access to pages" 
  ON pages 
  FOR ALL 
  TO authenticated 
  USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.is_admin = true
    )
  );

-- Policies for ads
CREATE POLICY "Allow public read access to ads" 
  ON ads 
  FOR SELECT 
  TO public 
  USING (active = true);

CREATE POLICY "Allow admin full access to ads" 
  ON ads 
  FOR ALL 
  TO authenticated 
  USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.is_admin = true
    )
  );

-- Add triggers for updated_at
CREATE TRIGGER update_pages_updated_at
  BEFORE UPDATE ON pages
  FOR EACH ROW
  EXECUTE PROCEDURE update_updated_at_column();

CREATE TRIGGER update_ads_updated_at
  BEFORE UPDATE ON ads
  FOR EACH ROW
  EXECUTE PROCEDURE update_updated_at_column();