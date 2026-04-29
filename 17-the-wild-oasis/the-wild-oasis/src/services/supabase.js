import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://uxdqvlhvfxsjzdfozmtc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4ZHF2bGh2ZnhzanpkZm96bXRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc0MzI5MTgsImV4cCI6MjA5MzAwODkxOH0.M0FwTQQsV_IPxHGVpO_HKK0g-Bch8lzK9Ri-MiWNDbs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
