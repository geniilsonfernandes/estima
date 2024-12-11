import { IconTrash } from '@tabler/icons-react';
import { useNavigate, useParams } from 'react-router';
import { Button, Divider, Flex, Grid, rem, Stack, Textarea, TextInput, Title } from '@mantine/core';
import { supabase } from '@/shared/services/supabase';

// mock.ts

// types.ts
export type Client = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  cpfOrCnpj?: string;
  site?: string;
  address?: {
    cep: string;
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
  };
  additionalInfo?: string;
};

export const mockClients: Client[] = [
  {
    id: '1',
    name: 'João Silva',
    email: 'joao.silva@email.com',
    phone: '11999999999',
    company: 'JS Tech',
    cpfOrCnpj: '123.456.789-00',
    site: 'https://js.tech',
    address: {
      cep: '12345-678',
      street: 'Rua das Flores',
      number: '123',
      neighborhood: 'Centro',
      city: 'São Paulo',
      state: 'SP',
    },
    additionalInfo: 'Cliente regular desde 2022.',
  },
  {
    id: '2',
    name: 'Maria Souza',
    email: 'maria.souza@email.com',
    phone: '21988888888',
    cpfOrCnpj: '987.654.321-00',
    site: 'https://maria.souza',
    address: {
      cep: '87654-321',
      street: 'Avenida Brasil',
      number: '456',
      neighborhood: 'Jardins',
      city: 'Rio de Janeiro',
      state: 'RJ',
    },
    additionalInfo: 'Solicitou orçamento personalizado.',
  },
  {
    id: '3',
    name: 'Carlos Oliveira',
    email: 'carlos.oliveira@email.com',
    phone: '31977777777',
    company: 'CO Serviços',
    cpfOrCnpj: '123.456.789/0001-99',
    site: 'https://co.servicos',
    address: {
      cep: '45678-910',
      street: 'Praça da Liberdade',
      number: '789',
      neighborhood: 'Liberdade',
      city: 'Belo Horizonte',
      state: 'MG',
    },
    additionalInfo: 'Possui contrato anual ativo.',
  },
];

export const CreateClientPage = () => {
  const { id } = useParams() as { id: string };
  const navigation = useNavigate();

  const handleGoBack = () => {
    navigation(-1);
  };

  const pageTitle = id ? 'Editar Cliente' : 'Criar Cliente';
  const isEditing = Boolean(id);

  const create = async () => {
    try {
      await supabase.from('Clients').insert({
        address: {
          cep: '12345-678',
          street: 'Rua das Flores',
          number: '123',
          neighborhood: 'Centro',
          city: 'São Paulo',
          state: 'SP',
        },
        email: 'joao.silva@email.com',
        name: 'João Silva',
        phone: '11999999999',
        birth_date: '1990-01-01',
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Flex justify="space-between" direction={{ base: 'column', md: 'row' }} gap="md">
        <Title fz="xl">{pageTitle}</Title>

        <Flex justify="flex-end" gap="xs" direction={{ base: 'column', md: 'row' }}>
          {isEditing && (
            <Button size="sm" variant="outline" color="red">
              <IconTrash style={{ width: rem(16) }} stroke={1.5} />
            </Button>
          )}
          <Button variant="outline" onClick={handleGoBack}>
            Cancelar
          </Button>
          <Button variant="filled" onClick={isEditing ? () => console.log('update') : create}>
            Salvar
          </Button>
        </Flex>
      </Flex>

      <Stack gap="xs" mt="md">
        <Grid mt="lg">
          <Grid.Col span={12}>
            <Divider label="Informações Básicas" labelPosition="left" />
          </Grid.Col>
          <Grid.Col span={12}>
            <TextInput label="Nome" placeholder="Ex.: João Silva" />
          </Grid.Col>
          <Grid.Col span={{ sm: 6 }}>
            <TextInput label="E-mail" placeholder="Ex.: joao.silva@email.com" />
          </Grid.Col>
          <Grid.Col span={{ sm: 6 }}>
            <TextInput label="Telefone" placeholder="Ex.: (11) 99999-9999" />
          </Grid.Col>
          <Grid.Col span={{ sm: 6 }}>
            <TextInput label="Empresa (Razão Social)" placeholder="Ex.: JS Tech" />
          </Grid.Col>
          <Grid.Col span={{ sm: 6 }}>
            <TextInput label="CPF/CNPJ" placeholder="Ex.: 123.456.789-00" />
          </Grid.Col>
          <Grid.Col span={{ sm: 12 }}>
            <TextInput label="Site" placeholder="Ex.: https://js.tech" />
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={12} mt="lg">
            <Divider label="Endereço" labelPosition="left" />
          </Grid.Col>
          <Grid.Col span={{ sm: 3 }}>
            <TextInput label="CEP" placeholder="Ex.: 12345-678" />
          </Grid.Col>
          <Grid.Col span={{ sm: 7 }}>
            <TextInput label="Endereço" placeholder="Ex.: Rua das Flores" />
          </Grid.Col>
          <Grid.Col span={{ sm: 2 }}>
            <TextInput label="N°" placeholder="Ex.: 123" />
          </Grid.Col>
          <Grid.Col span={{ sm: 3 }}>
            <TextInput label="Bairro" placeholder="Ex.: Centro" />
          </Grid.Col>
          <Grid.Col span={{ sm: 5 }}>
            <TextInput label="Cidade" placeholder="Ex.: São Paulo" />
          </Grid.Col>
          <Grid.Col span={{ sm: 4 }}>
            <TextInput label="UF" placeholder="Ex.: SP" />
          </Grid.Col>
        </Grid>

        <Grid mt="lg">
          <Grid.Col span={12}>
            <Divider label="Informações Adicionais" labelPosition="left" />
          </Grid.Col>
          <Grid.Col span={12}>
            <Textarea
              label="Observações"
              description="Adicione detalhes ou comentários sobre o cliente"
              placeholder="Ex.: Cliente preferencial para serviços premium"
            />
          </Grid.Col>
        </Grid>
        <Divider mt="lg" />

        <Flex justify="flex-end" gap="xs" direction={{ base: 'column', md: 'row' }}>
          <Button variant="outline" onClick={handleGoBack}>
            Cancelar
          </Button>
          <Button>Salvar</Button>
        </Flex>
      </Stack>
    </div>
  );
};
