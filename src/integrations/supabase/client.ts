
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://xrsapetdaehfrystgpcu.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhyc2FwZXRkYWVoZnJ5c3RncGN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4NDM2ODEsImV4cCI6MjA1NzQxOTY4MX0.GznrLzfAfo5lqffLBbyDJ8dnhnycgtEp8cmNtlTiMaA";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
