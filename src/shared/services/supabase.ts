import { createClient } from '@supabase/supabase-js';
import { Database } from './../../../database.types';

const KEY = 'supabase:auth:storage';

export const supabase = createClient<Database>(
  import.meta.env.VITE_APP_SUPABASE_URL,
  import.meta.env.VITE_APP_SUPABASE_ANON_KEY,
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
      storageKey: KEY,
      storage: {
        getItem: async (key: string) => window.sessionStorage.getItem(key),
        setItem: async (key: string, value: string) => window.sessionStorage.setItem(key, value),
        removeItem: async (key: string) => window.sessionStorage.removeItem(key),
      },
    },
  }
);