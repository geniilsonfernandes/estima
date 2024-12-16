import { supabase } from '@/shared/services/supabase';
import { CustomError } from '@/shared/utils/customError';

export type SignUpDTO = {
  email: string;
  password: string;
};

export const signOut = async () => {
  await supabase.auth.signOut();
};

export const signIn = async ({ email, password }: SignUpDTO) => {
  const { data, error: loginError } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (loginError) {
    throw new CustomError(loginError.message, loginError.status, loginError.name, loginError.name);
  }

  return data;
};

export async function signUpController({ email, password }: SignUpDTO) {
  const { data, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (signUpError) {
    throw new CustomError(
      signUpError.message,
      signUpError.status,
      signUpError.name,
      signUpError.name
    );
  }

  return data;
}
