import { IconEdit } from '@tabler/icons-react';
import { ActionIcon, Badge, Divider, Drawer, DrawerProps, Flex, Table } from '@mantine/core';
import { BudgetsOverview } from '@/shared/components/BudgetsOverview';

export type Budget = {
  id: string;
};

type BudgetDrawerProps = {
  data?: Budget;
} & DrawerProps;

const elements = [
  {
    id: '1',
    value: '1',
    status: 'Pendente',
  },
  {
    id: '2',
    value: '2',
    status: 'Pendente',
  },
  {
    id: '3',
    value: '3',
    status: 'Pendente',
  },
];

export const BudgetsDrawer = (props: BudgetDrawerProps) => {
  const rows = elements.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>{element.value}</Table.Td>
      <Table.Td>
        <Badge>{element.status}</Badge>
      </Table.Td>
      <Table.Td>
        <Flex justify="flex-end">
          <ActionIcon variant="outline">
            <IconEdit size={16} stroke={1.5} />
          </ActionIcon>
        </Flex>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Drawer position="left" offset={8} radius="md" title="Orçamento" {...props}>
        <BudgetsOverview />
        <Divider my="sm" mt="xl" />
        <Table striped highlightOnHover>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Valor</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th />
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Drawer>
    </>
  );
};
