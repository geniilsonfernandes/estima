import { Link } from 'react-router-dom';
import { Container, Divider, Grid, Stack, Text, Title } from '@mantine/core';
import { Logo } from '../../../../shared/components/Logo/Logo';
import { SubscribeInput } from '../SubscribeInput';

export default function Footer() {
  return (
    <>
      <Stack
        align="center"
        w="100%"
        ta="center"
        gap="md"
        justify="center"
        maw={600}
        mx="auto"
        my={96}
        px="xl"
      >
        <Text c="estimou.3" fz="sm">
          Seja um dos primeiros a transformar a maneira como você fecha negócios!
        </Text>
        <Title order={2} c="estimou.9" fz="h3">
          Inscreva-se na nossa lista de espera e ganhe acesso antecipado ao nosso gerador de
          orçamentos inteligente!
        </Title>
        <SubscribeInput mt="sm" w="100%" />
      </Stack>
      <Divider my="md" size="xs" />
      <Container py="md">
        <Grid>
          <Grid.Col
            span={{
              xs: 12,
              sm: 4,
              md: 4,
              lg: 4,
            }}
          >
            <Logo withText />
            <Text c="gray.6" fz="sm" mt="md">
              Feche negócios com mais rapidez usando nosso gerador de orçamentos inteligente.
            </Text>
          </Grid.Col>
          <Grid.Col
            span={{
              xs: 12,
              sm: 8,
              md: 8,
              lg: 8,
            }}
          >
            <Title order={5} c="estimou.9" fz="h5">
              Links
            </Title>
            <Link to="/politica-de-privacidade">
              <Text c="gray.6" fz="sm" mt="md">
                Política de privacidade
              </Text>
            </Link>
          </Grid.Col>
        </Grid>

        <Divider my="md" size="xs" mt={96} />
        <Text c="gray.6" fz="sm">
          © 2024 Estimou. Todos os direitos reservados
        </Text>
      </Container>
    </>
  );
}
