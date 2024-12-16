import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { z } from 'zod';
import { Button, Flex, PasswordInput, Stack, TextInput } from '@mantine/core';
import { AuthWrapper } from '../components';
import { useSignIn } from '../hooks';

const form = z.object({
  email: z.string().email({ message: 'E-mail inválido' }),
  password: z.string().min(8, { message: 'A senha deve ter pelo menos 8 caracteres' }),
});

type FormInputs = z.infer<typeof form>;

export function SignInPage() {
  const navigate = useNavigate();
  const { mutate: signUp, isPending } = useSignIn({
    onSuccess: () => {
      navigate('/app');
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(form),
  });

  const onSubmit = (data: FormInputs) => {
    signUp(data);
  };

  return (
    <Flex display="flex" h="100vh" bg="estimou.9" align="center" justify="center">
      <AuthWrapper type="sign-in">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack>
            <TextInput
              required
              label="E-mail"
              placeholder="seuemail@exemplo.com"
              radius="md"
              {...register('email')}
              error={errors.email?.message}
            />
            <PasswordInput
              required
              label="Senha"
              placeholder="Sua senha"
              radius="md"
              {...register('password')}
              error={errors.password?.message}
            />
            <Button type="submit" loading={isPending}>
              Entrar
            </Button>
          </Stack>
        </form>
      </AuthWrapper>
    </Flex>
  );
}
