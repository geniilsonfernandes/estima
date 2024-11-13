import { IconBrandZapier } from '@tabler/icons-react';
import { Button, Card, Flex, Text, Title } from '@mantine/core';

export const TemplateSelectFooter = () => {
  return (
    <Card py="40px" bg="estimou.9" p="lg">
      <Flex align="center" direction="column">
        <Title order={4} c="white" ta="center">
          Não temos o que precisa?
        </Title>
        <Text c="estimou.2" fz="sm" ta="center">
          Crie seu próprio modelo
        </Text>
        <Button variant="filled" mt="md" leftSection={<IconBrandZapier size={18} />}>
          Enviar modelo
        </Button>
      </Flex>
    </Card>
  );
};
