import { useMutation } from '@tanstack/react-query';
import { notifications } from '@mantine/notifications';
import { CustomError } from '@/shared/utils/customError';
import { signUpController, SignUpDTO } from '../controllers/authController';

export const useSignUp = () => {
  return useMutation({
    mutationFn: (data: SignUpDTO) => signUpController(data),
    onSuccess: () => {
      notifications.show({
        title: 'Sucesso',
        message: 'Usuário criado com sucesso',
        color: 'green',
      });
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
