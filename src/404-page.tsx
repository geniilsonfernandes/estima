import { Link } from 'react-router';
import { Button, Container, Group, Text, Title } from '@mantine/core';

export function NotFoundPage() {
  return (
    <Container ta="center">
      <Title ta="center" order={1} fw={900}>
        404
      </Title>
      <Title my="md" ta="center">
        You have found a secret place.
      </Title>
      <Text c="dimmed" size="lg" ta="center">
        Unfortunately, this is only a 404 page. You may have mistyped the address, or the page has
        been moved to another URL.
      </Text>
      <Group justify="center" mt="xl">
        <Button variant="subtle" size="md" to="/" component={Link}>
          Take me back to home page
        </Button>
      </Group>
    </Container>
  );
}
