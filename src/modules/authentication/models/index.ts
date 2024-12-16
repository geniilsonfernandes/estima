import { Session as SupabaseSession } from '@supabase/supabase-js';

export type User = Session['user'];
export type Session = SupabaseSession;
