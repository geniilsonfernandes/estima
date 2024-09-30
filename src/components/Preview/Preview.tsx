import {
  IconChevronLeft,
  IconChevronRight,
  IconDownload,
  IconEye,
  IconReplace,
} from '@tabler/icons-react';
import { ActionIcon, Button, Card, Flex, Stack, Table, Text } from '@mantine/core';
import { useBuilderStore } from '@/modules/builder/store';
import { formatCurrency } from '@/shared/utils/formatCurrency';

export const Preview = () => {
  const { company, customer, services } = useBuilderStore((state) => state);

  const rows = services.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.quantity}</Table.Td>
      <Table.Td>{element.price}</Table.Td>
      <Table.Td>{formatCurrency(element.quantity * element.price)}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Stack
      p="md"
      bg="estimou.9"
      h="100%"
      justify="space-between"
      style={{
        borderRadius: '8px',
      }}
    >
      <Flex align="center" justify="space-between">
        <Flex gap="sm">
          <Button variant="outline" leftSection={<IconReplace size={18} />} size="sm">
            Seleciona modelo
          </Button>
        </Flex>
        <Flex gap="sm">
          <ActionIcon variant="outline" size="lg">
            <IconEye size={18} />
          </ActionIcon>
          <Button variant="solid" leftSection={<IconDownload size={18} />} size="sm">
            Baixar orçamento
          </Button>
        </Flex>
      </Flex>

      <Card bg="white" mx="auto" withBorder>
        {Object.entries(company).map(([key, value]) => (
          <Text key={key} fz="8px">
            {key}: {value}
          </Text>
        ))}

        {Object.entries(customer).map(([key, value]) => (
          <Text key={key} fz="8px">
            {key}: {value}
          </Text>
        ))}

        <Table stickyHeader stickyHeaderOffset={60}>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Nome</Table.Th>
              <Table.Th>Quantidade</Table.Th>
              <Table.Th>Preço</Table.Th>
              <Table.Th>Total</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Card>

      <Flex align="center" justify="center">
        <ActionIcon variant="subtle" size="md">
          <IconChevronLeft />
        </ActionIcon>
        <Text c="white" mx="sm" size="xs">
          1 de 1
        </Text>
        <ActionIcon variant="subtle" size="md">
          <IconChevronRight />
        </ActionIcon>
      </Flex>
    </Stack>
  );
};
