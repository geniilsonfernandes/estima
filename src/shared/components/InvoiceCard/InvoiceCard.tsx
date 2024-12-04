import { IconCalendar, IconDots, IconEdit, IconEye } from '@tabler/icons-react';
import { ActionIcon, Badge, Button, Card, Flex, Group, Menu, Text } from '@mantine/core';
import { Budget } from '@/shared/models';
import { DisplayValue } from '../DisplayValue';
import classes from './InvoiceCard.module.css';

type InvoiceCardProps = Budget;

export const InvoiceCard = ({ client, id, status, value, validity, date }: InvoiceCardProps) => {
  const data = [
    { title: 'validade', value: validity },
    { title: 'total', value },
  ];

  const statusColor = {
    draft: 'yellow',
    pending: 'orange',
    active: 'green',
    completed: 'green',
    cancelled: 'red',
  };

  const items = data.map((stat) => <DisplayValue key={stat.title} {...stat} />);

  return (
    <Card shadow="md" radius="md" aria-label={` Orcamento ${id}`}>
      <Card.Section p="sm" className={classes.header}>
        <Badge variant="outline" size="sm" color={statusColor[status]}>
          {status}
        </Badge>
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
      </Card.Section>

      <Card.Section px="sm">
        <DisplayValue title="Cliente:" value={client} />

        <Group gap="xs" mt="xs">
          {items}
        </Group>
        <Flex gap="xs" mt="sm" c="dimmed" align="center">
          <IconCalendar size={16} stroke={1.5} />
          <Text size="xs" tt="capitalize">
            {date}
          </Text>
        </Flex>
      </Card.Section>

      <Card.Section p="sm">
        <Flex gap="xs" align="start" justify="space-between">
          <Button variant="light" size="xs" fullWidth leftSection={<IconEye size={18} />}>
            Preview
          </Button>
          <Button variant="outline" size="xs" fullWidth leftSection={<IconEdit size={18} />}>
            Detalhes
          </Button>
        </Flex>
      </Card.Section>
    </Card>
  );
};
