import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notifications } from '@mantine/notifications';
import {
  CustomError,
  deleteClient as deleteClientController,
} from '../controllers/ClientController';
import { clientKeys } from './useListClient';

type UseDeleteClientProps = {
  onSuccess?: () => void;
  onError?: (error: CustomError) => void;
};

export const useDeleteClient = ({ onSuccess, onError }: UseDeleteClientProps = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id }: { id?: string }) => deleteClientController(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: clientKeys.all(),
      });
      notifications.show({
        title: 'Sucesso',
        message: 'Cliente excluido com sucesso',
        color: 'green',
      });
      onSuccess?.();
    },
    onError: (error: any) => {
      if (error instanceof CustomError) {
        notifications.show({
          title: 'Erro',
          message: `Erro ao excluir cliente: ${error.message} (Status: ${error.status})`,
          color: 'red',
        });
        onError?.(error);
      } else {
        notifications.show({
          title: 'Erro',
          message: 'Erro desconhecido ao atualizar cliente',
          color: 'red',
        });
      }
    },
  });
};
