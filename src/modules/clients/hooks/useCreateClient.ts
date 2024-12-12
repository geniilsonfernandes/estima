import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notifications } from '@mantine/notifications';
import {
  createClient as createClientController,
  CreateClientDTO,
  CustomError,
} from '../controllers/ClientController';
import { clientKeys } from './useListClient';

type UseCreateClientProps = {
  onSuccess?: () => void;
};
export const useCreateClient = ({ onSuccess }: UseCreateClientProps) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (clientData: CreateClientDTO) => createClientController(clientData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: clientKeys.all(),
      });

      notifications.show({
        title: 'Sucesso',
        message: 'Cliente criado com sucesso',
        color: 'green',
      });

      onSuccess?.();
    },
    onError: (error: any) => {
      if (error instanceof CustomError) {
        notifications.show({
          title: 'Erro',
          message: `Erro ao criar cliente: ${error.message} (Status: ${error.status})`,
          color: 'red',
        });
      } else {
        notifications.show({
          title: 'Erro',
          message: 'Erro desconhecido ao criar cliente',
          color: 'red',
        });
      }
    },
  });
};
