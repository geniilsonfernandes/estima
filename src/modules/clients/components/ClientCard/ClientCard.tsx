import {
  IconBrandWhatsapp,
  IconEdit,
  IconEye,
  IconFolderSearch,
  IconInfoCircle,
  IconMail,
  IconTrash,
  IconWorld,
} from '@tabler/icons-react';
import {
  ActionIcon,
  Alert,
  Box,
  Button,
  Divider,
  Flex,
  Group,
  Modal,
  Paper,
  rem,
  Text,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import { Client } from '../../views/Client.page';

type ClientCardProps = {
  onView?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  onInvoices?: () => void;
} & Client;

export const ClientCard = ({
  name = 'Cliente não identificado',
  cpfOrCnpj,
  onView,
  onEdit,
  onDelete,
}: ClientCardProps) => {
  const [opened, { open, close }] = useDisclosure(false);

  const handleClose = () => {
    close();
    notifications.show({
      title: 'Cancelado',
      message: 'Exclusão cancelada',
      color: 'gray',
    });
  };
  return (
    <Paper p="sm">
      <Group justify="space-between">
        <Box>
          <Text size="sm" fw={500}>
            {name}
          </Text>

          <Text size="xs" c="dimmed">
            {cpfOrCnpj}
          </Text>
        </Box>

        <Group gap="xs">
          <ActionIcon variant="light" size="md">
            <IconBrandWhatsapp style={{ width: rem(16) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon variant="light" size="md">
            <IconMail style={{ width: rem(16) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon variant="light" size="md">
            <IconWorld style={{ width: rem(16) }} stroke={1.5} />
          </ActionIcon>
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
            onClick={open}
          >
            <IconTrash style={{ width: rem(16) }} stroke={1.5} />
          </Button>
        </Flex>
      </Flex>
      <Modal opened={opened} onClose={handleClose} title="Excluir" centered>
        <Text my="md">Tem certeza que deseja excluir o cliente?</Text>
        <Alert variant="light" color="red" title="ATENÇÃO:" icon={<IconInfoCircle />}>
          Todos os orçamentos deste cliente serão excluidos
        </Alert>
        <Group justify="flex-end" mt="md">
          <Button onClick={handleClose} variant="default">
            Cancelar
          </Button>
          <Button color="red" onClick={onDelete}>
            Excluir
          </Button>
        </Group>
      </Modal>
    </Paper>
  );
};
