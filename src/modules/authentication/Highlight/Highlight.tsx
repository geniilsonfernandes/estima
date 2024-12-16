import { Avatar, Box, Divider, Group, Rating, Stack, Text, Title } from '@mantine/core';
import { Logo } from '@/shared/components/Logo';

export const Highlight = () => {
  return (
    <Box p={{ base: 'lg', md: 'xl' }}>
      <Logo />
      <Title order={1} fz="h2" lh="1.2" mt="xl">
        Diga adeus aos orçamentos via WhatsApp e PDFs!
      </Title>
      <Text c="dimmed" fz="sm" mt="md">
        Com nosso gerador de orçamentos inteligente, você transforma suas propostas em um link
        prático e profissional, pronto para fechar negócios com agilidade e eficiência.
      </Text>
      <Divider my="xl" size="xs" />
      <Stack>
        <Rating defaultValue={4.5} fractions={4} />
        <Text c="dimmed" fz="sm">
          4.9/5 (1.2k avaliações)
        </Text>
        <Text c="dimmed" fz="sm">
          Wow! This tool does exactly what you need it to do. I was getting frustrated trying to
          bulk download my receipts natively from individual websites.
        </Text>
        <Group>
          <Avatar
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
            alt="Jacob Warnhalter"
            radius="xl"
          />
          <div>
            <Text size="sm">Jacob Warnhalter</Text>
            <Text size="xs" c="dimmed">
              10 minutes ago
            </Text>
          </div>
        </Group>
      </Stack>
    </Box>
  );
};
