import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://narcfnhycrkqtktjdzqn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5hcmNmbmh5Y3JrcXRrdGpkenFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3NjU0MjAsImV4cCI6MjA3ODM0MTQyMH0.dvEcLEuTCg8uh0PxTnMmn2QuJw3RqUX61u6T9HuQ-1Y";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
