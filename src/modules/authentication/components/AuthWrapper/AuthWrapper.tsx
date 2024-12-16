import { Link } from 'react-router';
import { Anchor, Divider, Paper, Stack, Text, Title } from '@mantine/core';
import { Logo } from '@/shared/components/Logo';

type AuthFormProps = {
  type: 'sign-in' | 'sign-up';
  children?: React.ReactNode;
};

export const AuthWrapper = ({ type, children }: AuthFormProps) => {
  const footerAction = type === 'sign-in' ? ' Não possui uma conta? ' : 'Já possui uma conta? ';
  const footerLink = type === 'sign-in' ? '/sign-up' : '/sign-in';
  const footerlabel = type === 'sign-in' ? 'Cadastro' : 'Login';
  return (
    <Paper bg="gray.1" radius="md" pos="relative">
      <Paper p="xl" radius="md" w={400} withBorder>
        <Stack align="center" justify="space-between">
          <Logo />
          <Title size="lg" fw={800} mt="md">
            Bem-vindo ao Estimou!
          </Title>
        </Stack>
        <Divider label={type === 'sign-in' ? 'Login' : 'Cadastro'} labelPosition="center" my="lg" />
        {children}
      </Paper>
      <Paper bg="gray.1" p="md">
        <Text c="dimmed" size="xs" ta="center">
          {footerAction}
          <Anchor fw={600} component={Link} to={footerLink}>
            {footerlabel}
          </Anchor>
        </Text>
      </Paper>
    </Paper>
  );
};
