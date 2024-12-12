import { IconCalendar, IconEdit, IconEye } from '@tabler/icons-react';
import {
  Badge,
  Button,
  Card,
  Divider,
  Flex,
  Group,
  Progress,
  rem,
  SimpleGrid,
  Text,
} from '@mantine/core';
import { Budget } from '@/shared/models';
import { DisplayValue } from '../DisplayValue';
import classes from './InvoiceCard.module.css';

export type InvoiceCardProps = {
  variant?: 'compact' | 'detailed';
  onView?: () => void;
  onDetails?: () => void;
  data?: Budget;
};

export const InvoiceCard = ({
  data: { id, status, total, client, dueDate, date } = {},
  variant = 'detailed',
  onView,
  onDetails,
}: InvoiceCardProps) => {
  const statusColor = {
    draft: 'yellow',
    pending: 'orange',
    active: 'green',
    completed: 'green',
    cancelled: 'red',
  };

  const buttons = () => {
    return (
      <Card.Section p="sm">
        <Divider mb="sm" />
        <Flex gap="xs" w="100%">
          <Button
            variant="light"
            size="xs"
            fullWidth
            leftSection={<IconEye size={18} />}
            onClick={onView}
          >
            Preview
          </Button>
          <Button
            variant="outline"
            size="xs"
            fullWidth
            leftSection={<IconEdit size={18} />}
            onClick={onDetails}
          >
            Detalhes
          </Button>
        </Flex>
      </Card.Section>
    );
  };

  if (variant === 'compact') {
    return (
      <Card shadow="md" radius="md" aria-label={` Orcamento ${id}`}>
        <Group justify="space-between">
          <DisplayValue title="status:" value={status} />
          <DisplayValue title="Data:" value={date} />
          <DisplayValue title="valor:" value={total} />
        </Group>
        {buttons()}
      </Card>
    );
  }

  return (
    <Card shadow="md" radius="md" aria-label={` Orcamento ${id}`}>
      <Card.Section px="sm" className={classes.header}>
        <Badge variant="outline" size="sm" color={statusColor[status || 'draft']}>
          {status}
        </Badge>

        <Text size="xs" tt="capitalize" c="dimmed">
          {id}
        </Text>
      </Card.Section>
      <Card.Section px="sm">
        <SimpleGrid cols={2}>
          <DisplayValue title="Cliente:" value={client} />
          <DisplayValue title="Valor:" value={total} />
        </SimpleGrid>

        <Flex gap="xs" mt="sm" c="dimmed" align="center" justify="space-between">
          <Flex gap="xs" c="dimmed" align="center">
            <IconCalendar style={{ width: rem(16) }} stroke={1.5} />
            <Text size="xs" tt="capitalize">
              {date}
            </Text>
          </Flex>
          <Text size="xs" tt="capitalize">
            {dueDate}
          </Text>
        </Flex>
        <Progress mt="xs" size="xs" value={50} />
      </Card.Section>
      {buttons()}
    </Card>
  );
};
