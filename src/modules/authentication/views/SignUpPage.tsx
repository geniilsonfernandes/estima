import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button, Center, Flex, PasswordInput, Stack, TextInput } from '@mantine/core';
import { AuthWrapper, Highlight } from '../components';
import { useSignUp } from '../hooks';

const form = z.object({
  email: z.string().email({ message: 'E-mail inválido' }),
  password: z.string().min(8, { message: 'A senha deve ter pelo menos 8 caracteres' }),
});

type FormInputs = z.infer<typeof form>;

export function SignUpPage() {
  const { mutate: signUp, isPending } = useSignUp();

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
    <Flex display="flex" h="100vh">
      <Center
        flex={1}
        p={{ base: '0', md: '50px', lg: '100px' }}
        style={{
          borderRight: '1px solid var(--mantine-color-gray-2)',
        }}
        display={{ base: 'none', md: 'flex' }}
      >
        <Highlight />
      </Center>
      <Center flex={1} bg="estimou.9" p={{ base: '0', md: '50px', lg: '100px' }} pos="relative">
        <AuthWrapper type="sign-up">
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
                Registrar
              </Button>
            </Stack>
          </form>
        </AuthWrapper>
      </Center>
    </Flex>
  );
}
