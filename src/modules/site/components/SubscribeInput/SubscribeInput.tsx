// SubscribeInput.js
import { useState } from 'react';
import { IconMail, IconRocket } from '@tabler/icons-react';
import { Button, Input, Stack, StackProps } from '@mantine/core';
import { addSubscriberEmail } from '../../services/subscribeService';

type SubscribeInputProps = {} & StackProps;

export const SubscribeInput = (props: SubscribeInputProps) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubscribe = async () => {
    setLoading(true);
    try {
      await addSubscriberEmail(email);
      setSuccess(true);
      setEmail(''); // Limpa o campo após o sucesso
    } catch (error) {
      console.error('Erro ao inscrever e-mail:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Stack {...props}>
      {!success && (
        <Input
          leftSection={<IconMail />}
          variant="filled"
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      )}
      <Button
        variant=""
        size="md"
        leftSection={<IconRocket size={18} />}
        onClick={handleSubscribe}
        disabled={loading || success}
      >
        {loading ? 'Enviando...' : success ? 'Inscrito!' : 'Lista de espera'}
      </Button>
    </Stack>
  );
};
