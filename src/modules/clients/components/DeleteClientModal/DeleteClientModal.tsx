import { IconInfoCircle } from '@tabler/icons-react';
import {
  Alert,
  Avatar,
  Box,
  Button,
  Group,
  Modal,
  ModalProps,
  Paper,
  Text,
  Title,
} from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { Client } from '../../model/client';

type ClientToDeleteProps = {
  data?: Client;
  onConfirm: () => void;
  isDeleting: boolean;
} & ModalProps;

export const DeleteClientModal = ({
  data,
  onConfirm,
  isDeleting,
  onClose,
  ...rest
}: ClientToDeleteProps) => {
  const handleClose = () => {
    onClose();
    notifications.show({
      title: 'Cancelado',
      message: 'Exclusão cancelada',
      color: 'gray',
    });
  };
  return (
    <Modal title="Excluir" onClose={handleClose} centered {...rest}>
      <Text my="md">Tem certeza que deseja excluir o cliente?</Text>
      <Paper my="md" shadow="sm" p="md">
        <Avatar radius="md" size="md" name={data?.name} />
        <Box>
          <Title order={3} fz="sm">
            {data?.name}
          </Title>
          <Text size="xs" c="dimmed">
            {data?.email}
          </Text>
        </Box>
      </Paper>
      <Alert variant="light" color="red" title="ATENÇÃO:" icon={<IconInfoCircle />}>
        Todos os orçamentos deste cliente serão excluidos
      </Alert>
      <Group justify="flex-end" mt="md">
        <Button onClick={handleClose} variant="default">
          Cancelar
        </Button>
        <Button color="red" loading={isDeleting} onClick={onConfirm}>
          Excluir
        </Button>
      </Group>
    </Modal>
  );
};
