import { useMutation } from '@tanstack/react-query';
import { notifications } from '@mantine/notifications';
import { CustomError } from '@/shared/utils/customError';
import { signIn as signInController, SignUpDTO } from '../controllers/authController';

type UseSignInProps = {
  onSuccess?: () => void;
};

export const useSignIn = ({ onSuccess }: UseSignInProps = {}) => {
  return useMutation({
    mutationFn: (data: SignUpDTO) => signInController(data),
    onSuccess: () => {
      notifications.show({
        title: 'Sucesso',
        message: 'Login realizado com sucesso',
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
