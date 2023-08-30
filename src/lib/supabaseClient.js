import { createClient } from "@supabase/supabase-js";
import { VITE_SUPABASE_ANON_KEY } from "$env/static/private";
import { VITE_SUPABASE_URL } from "$env/static/private";

const supabaseUrl = "https://ynnjpmqeypliiucqmvdw.supabase.co";
const supabaseKey = VITE_SUPABASE_ANON_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);
