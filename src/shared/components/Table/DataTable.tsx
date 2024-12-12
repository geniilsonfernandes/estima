import { IconDots, IconEdit, IconEye } from '@tabler/icons-react';
import { ActionIcon, Badge, Menu, Table } from '@mantine/core';
import { Budget } from '@/shared/models/budgetModel';
import classes from './DataTable.module.css';

type DataTableProps = {
  data?: Budget[];
};

export function DataTable({ data }: DataTableProps) {
  const statusColor = {
    draft: 'yellow',
    pending: 'orange',
    active: 'green',
    completed: 'green',
    cancelled: 'red',
  };

  const rows = data?.map((item) => (
    <Table.Tr key={item.id}>
      <Table.Td>{item.id}</Table.Td>
      <Table.Td>{item.client}</Table.Td>
      <Table.Td>{item.dueDate}</Table.Td>
      <Table.Td>{item.date}</Table.Td>
      <Table.Td>{item.total}</Table.Td>
      <Table.Td>
        <Badge variant="light" color={statusColor[item.status as keyof typeof statusColor]}>
          {item.status}
        </Badge>
      </Table.Td>
      <Table.Td>
        <Menu withinPortal>
          <Menu.Target>
            <ActionIcon variant="subtle" color="gray">
              <IconDots size={16} stroke={1.5} />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item leftSection={<IconEye size={16} stroke={1.5} />}>Preview</Menu.Item>
            <Menu.Item leftSection={<IconEdit size={16} stroke={1.5} />}>Detalhes</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table.ScrollContainer minWidth={800} className={classes.table}>
      <Table verticalSpacing="xs" bg="white" withRowBorders highlightOnHover striped>
        <Table.Thead bg="white" fz={12} c="dimmed">
          <Table.Tr>
            <Table.Th>ID</Table.Th>
            <Table.Th>Cliente</Table.Th>
            <Table.Th>Validade</Table.Th>
            <Table.Th>Data</Table.Th>
            <Table.Th>Valor</Table.Th>
            <Table.Th>Status</Table.Th>
            <Table.Th />
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
