import { IconCalendar, IconEdit, IconEye } from '@tabler/icons-react';
import { Badge, Button, Card, Divider, Flex, Progress, rem, SimpleGrid, Text } from '@mantine/core';
import { Budget } from '@/shared/models';
import { DisplayValue } from '../DisplayValue';
import classes from './InvoiceCard.module.css';

type InvoiceCardProps = Budget;

export const InvoiceCard = ({ client, id, status, value, validity, date }: InvoiceCardProps) => {
  const statusColor = {
    draft: 'yellow',
    pending: 'orange',
    active: 'green',
    completed: 'green',
    cancelled: 'red',
  };

  return (
    <Card shadow="md" radius="md" aria-label={` Orcamento ${id}`}>
      <Card.Section px="sm" className={classes.header}>
        <Badge variant="outline" size="sm" color={statusColor[status]}>
          {status}
        </Badge>

        <Text size="xs" tt="capitalize" c="dimmed">
          {id}
        </Text>
      </Card.Section>
      <Card.Section px="sm">
        <SimpleGrid cols={2}>
          <DisplayValue title="Cliente:" value={client} />
          <DisplayValue title="Valor:" value={value} />
        </SimpleGrid>

        <Flex gap="xs" mt="sm" c="dimmed" align="center" justify="space-between">
          <Flex gap="xs" c="dimmed" align="center">
            <IconCalendar style={{ width: rem(16) }} stroke={1.5} />
            <Text size="xs" tt="capitalize">
              {date}
            </Text>
          </Flex>
          <Text size="xs" tt="capitalize">
            {validity}
          </Text>
        </Flex>
        <Progress mt="xs" size="xs" value={50} />
      </Card.Section>

      <Card.Section p="sm">
        <Divider mb="sm" />
        <Flex gap="xs" w="100%">
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
