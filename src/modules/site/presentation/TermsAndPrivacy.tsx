import { Container, Stack, Text, Title } from '@mantine/core';
import { Menu } from '../components/Menu/Menu';

export const TermsAndPrivacy = () => {
  return (
    <Container size="sm" py="lg">
      <Menu />

      <Title ta="center" order={2} mb="md" c="estimou.9" mt={96}>
        Termos de Serviço e Política de Privacidade
      </Title>

      <Stack gap="md">
        <Text>
          Ao se inscrever na nossa lista de espera, você concorda com os seguintes termos:
        </Text>

        <Title order={4}>1. Coleta de Informações</Title>
        <Text>
          Nós coletamos apenas o seu e-mail para informá-lo sobre o lançamento do nosso produto e
          atualizações relacionadas.
        </Text>

        <Title order={4}>2. Uso das Informações</Title>
        <Text>
          Seu e-mail será utilizado exclusivamente para enviar notificações sobre a lista de espera,
          o lançamento do produto e eventuais benefícios exclusivos. Não compartilharemos seu e-mail
          com terceiros.
        </Text>

        <Title order={4}>3. Segurança</Title>
        <Text>
          Tomamos todas as precauções necessárias para proteger as informações armazenadas.
          Utilizamos criptografia e outras práticas de segurança padrão para garantir a proteção dos
          dados.
        </Text>

        <Title order={4}>4. Direitos dos Usuários</Title>
        <Text>
          Você pode solicitar a remoção do seu e-mail da nossa lista de espera a qualquer momento,
          entrando em contato conosco.
        </Text>

        <Title order={4}>5. Alterações na Política</Title>
        <Text>
          Podemos atualizar estes termos de tempos em tempos. Notificaremos você sobre mudanças
          significativas através do e-mail cadastrado.
        </Text>

        <Text>
          Ao se cadastrar, você concorda com o uso dos seus dados conforme descrito acima. Em caso
          de dúvidas, entre em contato conosco para mais informações.
        </Text>
      </Stack>
    </Container>
  );
};
