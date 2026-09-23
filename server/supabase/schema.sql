-- Supabase schema for the Sahayak AI app
-- Run this in the Supabase SQL editor for the connected project.

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  phone TEXT UNIQUE NOT NULL,
  full_name TEXT,
  preferred_language TEXT DEFAULT 'hi',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.schemes (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT,
  benefits TEXT,
  source_url TEXT,
  eligibility_rules JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  scheme_id TEXT REFERENCES public.schemes(id),
  status TEXT DEFAULT 'Draft',
  form_data JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_profiles_phone ON public.profiles(phone);
CREATE INDEX IF NOT EXISTS idx_applications_user_id ON public.applications(user_id);
CREATE INDEX IF NOT EXISTS idx_applications_scheme_id ON public.applications(scheme_id);

INSERT INTO public.schemes (id, title, category, benefits, source_url, eligibility_rules)
VALUES
  (
    'pm-kisan',
    'PM-KISAN',
    'Agriculture',
    'Direct financial assistance to small and marginal farmer families across eligible households.',
    'https://pmkisan.gov.in/',
    '[
      "Must be a small or marginal farmer family",
      "Must maintain valid landholding records as per state norms",
      "Annual household income and residency criteria must be met"
    ]'::jsonb
  ),
  (
    'pmay',
    'Pradhan Mantri Awas Yojana',
    'Housing',
    'Affordable housing support for eligible rural and urban families with subsidized construction assistance.',
    'https://pmay-urban.gov.in/',
    '[
      "Income and household category eligibility must be verified",
      "Residence and documentation requirements vary by state",
      "Applicants must not own a pucca house in their name"
    ]'::jsonb
  ),
  (
    'startup-india',
    'Startup India Seed Fund',
    'Business',
    'Seed capital support for early-stage startups with scalable innovation and employment potential.',
    'https://www.startupindia.gov.in/',
    '[
      "Startup must be incorporated as a legal entity",
      "Innovative business model and growth potential required",
      "Application must align with recognized startup criteria"
    ]'::jsonb
  )
ON CONFLICT (id) DO UPDATE
SET title = EXCLUDED.title,
    category = EXCLUDED.category,
    benefits = EXCLUDED.benefits,
    source_url = EXCLUDED.source_url,
    eligibility_rules = EXCLUDED.eligibility_rules;

-- Optional: allow public reads for schemes if you want static scheme discovery without auth.
ALTER TABLE public.schemes ENABLE ROW LEVEL SECURITY;
CREATE POLICY IF NOT EXISTS "schemes_are_publicly_readable"
ON public.schemes FOR SELECT
USING (true);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY IF NOT EXISTS "profiles_can_be_inserted_by_authenticated_users"
ON public.profiles FOR INSERT
WITH CHECK (true);

ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;
CREATE POLICY IF NOT EXISTS "applications_are_accessible_for_authenticated_users"
ON public.applications FOR ALL
USING (true)
WITH CHECK (true);
