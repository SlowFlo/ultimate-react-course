import { createClient } from "@supabase/supabase-js";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY,
);
