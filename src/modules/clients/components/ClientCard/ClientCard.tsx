import {
  IconBrandWhatsapp,
  IconEdit,
  IconEye,
  IconFolderSearch,
  IconMail,
  IconTrash,
  IconWorld,
} from '@tabler/icons-react';
import {
  ActionIcon,
  Box,
  Button,
  CopyButton,
  Divider,
  Flex,
  Group,
  Paper,
  rem,
  Text,
  Tooltip,
} from '@mantine/core';
import { Client } from '../../model/client';

type ClientCardProps = {
  onView?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  onViewBudgets?: () => void;
  data?: Client;
};

export const ClientCard = ({ data, onView, onEdit, onDelete, onViewBudgets }: ClientCardProps) => {
  return (
    <Paper p="sm">
      <Group justify="space-between">
        <Box>
          <Text size="sm" fw={500}>
            {data?.name}
          </Text>

          <Text size="xs" c="dimmed">
            {data?.email}
          </Text>
        </Box>

        <Group gap="xs">
          <CopyButton value={data?.phone || ''} timeout={2000}>
            {({ copied, copy }) => (
              <Tooltip
                label={copied ? 'Copiado' : 'Copiar'}
                withArrow
                position="right"
                disabled={!data?.phone}
              >
                <ActionIcon
                  color={copied ? 'teal' : 'estimou'}
                  variant="subtle"
                  onClick={copy}
                  disabled={!data?.phone}
                >
                  <IconBrandWhatsapp style={{ width: rem(16) }} stroke={1.5} />
                </ActionIcon>
              </Tooltip>
            )}
          </CopyButton>
          <CopyButton value={data?.email || ''} timeout={2000}>
            {({ copied, copy }) => (
              <Tooltip
                label={copied ? 'Copiado' : 'Copiar'}
                withArrow
                position="right"
                disabled={!data?.email}
              >
                <ActionIcon
                  color={copied ? 'teal' : 'estimou'}
                  variant="subtle"
                  onClick={copy}
                  disabled={!data?.email}
                >
                  <IconMail style={{ width: rem(16) }} stroke={1.5} />
                </ActionIcon>
              </Tooltip>
            )}
          </CopyButton>

          <CopyButton value={data?.site || ''} timeout={2000}>
            {({ copied, copy }) => (
              <Tooltip
                label={copied ? 'Copiado' : 'Copiar'}
                withArrow
                position="right"
                disabled={!data?.site}
              >
                <ActionIcon
                  disabled={!data?.site}
                  color={copied ? 'teal' : 'estimou'}
                  variant="subtle"
                  onClick={copy}
                >
                  <IconWorld style={{ width: rem(16) }} stroke={1.5} />
                </ActionIcon>
              </Tooltip>
            )}
          </CopyButton>
        </Group>
      </Group>
      <Divider my="sm" />
      <Flex
        gap="xs"
        direction={{
          base: 'column',
          md: 'row',
        }}
        justify="space-between"
      >
        <Flex gap="xs" flex={1}>
          <Button
            size="xs"
            w={{ base: '100%', md: 'auto' }}
            variant="light"
            onClick={onViewBudgets}
            disabled={!data?.budgets}
            leftSection={<IconEye style={{ width: rem(16) }} stroke={1.5} />}
          >
            Orçamentos
          </Button>
          <Button
            size="xs"
            w={{ base: '100%', md: 'auto' }}
            variant="outline"
            onClick={onView}
            leftSection={<IconFolderSearch style={{ width: rem(16) }} stroke={1.5} />}
          >
            Detalhes
          </Button>
        </Flex>
        <Flex gap="xs" justify="flex-end" flex={1}>
          <Button
            size="xs"
            w={{ base: '100%', md: 'auto' }}
            variant="outline"
            onClick={onEdit}
            leftSection={<IconEdit style={{ width: rem(16) }} stroke={1.5} />}
          >
            Editar
          </Button>
          <Button
            size="xs"
            w={{ base: '100%', md: 'auto' }}
            variant="outline"
            color="red"
            onClick={onDelete}
          >
            <IconTrash style={{ width: rem(16) }} stroke={1.5} />
          </Button>
        </Flex>
      </Flex>
    </Paper>
  );
};
