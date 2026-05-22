import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// Yahan humne sahi variable name (ANON_KEY) use kiya hai aur safe fallback lagaya hai
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const createClient = () => {
  return createBrowserClient(
    supabaseUrl || "https://placeholder.supabase.co",
    supabaseKey || "placeholder-key"
  );
};