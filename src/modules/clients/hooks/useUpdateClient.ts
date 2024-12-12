import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notifications } from '@mantine/notifications';
import {
  CustomError,
  updateClient as updateClientController,
  UpdateClientDTO,
} from '../controllers/ClientController';
import { clientKeys } from './useListClient';

type UseUpdateClientProps = {
  onSuccess?: () => void;
  onError?: (error: CustomError) => void;
};

export const useUpdateClient = ({ onSuccess, onError }: UseUpdateClientProps) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, clientData }: { id: string; clientData: UpdateClientDTO }) =>
      updateClientController(id, clientData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: clientKeys.all(),
      });
      notifications.show({
        title: 'Sucesso',
        message: 'Cliente atualizado com sucesso',
        color: 'green',
      });
      onSuccess?.();
    },
    onError: (error: any) => {
      if (error instanceof CustomError) {
        notifications.show({
          title: 'Erro',
          message: `Erro ao atualizar cliente: ${error.message} (Status: ${error.status})`,
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
