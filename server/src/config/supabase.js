import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const normalizeValue = (value) => (typeof value === 'string' ? value.trim() : '');
const isPlaceholder = (value) => {
  const cleaned = normalizeValue(value);
  return !cleaned || /your-project\.supabase\.co|your-anon-key|your-service-role-key|your_supabase_project_url|your_supabase_service_role_key|example\.gov|example\.com/i.test(cleaned);
};

const supabaseUrl = normalizeValue(process.env.SUPABASE_URL);
const supabaseKey =
  normalizeValue(process.env.SUPABASE_SERVICE_ROLE_KEY) ||
  normalizeValue(process.env.SUPABASE_ANON_KEY);

if (isPlaceholder(supabaseUrl) || isPlaceholder(supabaseKey)) {
  console.warn('Warning: Supabase credentials are not configured. Running in demo fallback mode.');
}

export const supabase =
  !isPlaceholder(supabaseUrl) && !isPlaceholder(supabaseKey)
    ? createClient(supabaseUrl, supabaseKey)
    : null;