import { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { IconTrash } from '@tabler/icons-react';
import { QueryClient } from '@tanstack/react-query';
import { Controller, useForm } from 'react-hook-form';
import { IMaskInput } from 'react-imask';
import { LoaderFunctionArgs, useNavigate, useParams } from 'react-router';
import { z } from 'zod';
import {
  Button,
  Divider,
  Flex,
  Grid,
  InputBase,
  LoadingOverlay,
  Paper,
  rem,
  Select,
  Stack,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import { states } from '@/shared/constant/states';
import { DeleteClientModal } from '../components/DeleteClientModal';
import { useCreateClient } from '../hooks/useCreateClient';
import { useDeleteClient } from '../hooks/useDeleteClient';
import { clientDetailsQuery, useClientDetail } from '../hooks/useListClient';
import { useUpdateClient } from '../hooks/useUpdateClient';

// mock.ts`

// Schema de validação com Zod
const formSchema = z.object({
  additionalInfo: z.string().nullable().optional(),
  cep: z.string().nullable().optional(),
  city: z.string().nullable().optional(),
  company: z.string().nullable().optional(),
  document: z.string().nullable().optional(),
  email: z.string().email({ message: 'E-mail inválido' }),
  site: z.string().nullable().optional(),
  is_active: z.boolean().nullable().optional(),
  name: z.string().min(1, { message: 'O nome é obrigatório' }),
  neighborhood: z.string().nullable().optional(),
  number: z.string().nullable().optional(),
  phone: z.string().nullable().optional(),
  state: z.string().nullable().optional(),
  street: z.string().nullable().optional(),
});

type FormData = z.infer<typeof formSchema>;

export const loader =
  (queryClient: QueryClient) =>
  async ({ params }: LoaderFunctionArgs) => {
    if (!params.id) {
      return {};
    }
    return await queryClient.prefetchQuery(clientDetailsQuery(params.id));
  };

export const CreateClientPage = () => {
  const { id } = useParams() as { id: string };
  const navigation = useNavigate();
  const { data: client, isError } = useClientDetail(id);
  const [opened, { open, close }] = useDisclosure(false);

  const isEditing = Boolean(id);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: client?.name || '',
      email: client?.email || '',
      phone: client?.phone || '',
      is_active: client?.is_active || false,
      document: client?.document || '',
      company: client?.company || '',
      site: client?.site || '',
      cep: client?.cep || '',
      street: client?.street || '',
      number: client?.number || '',
      neighborhood: client?.neighborhood || '',
      city: client?.city || '',
      state: client?.state || '',
      additionalInfo: client?.additionalInfo || '',
    },
  });

  const handleGoBack = () => {
    navigation(-1);
  };

  const { mutate: create, isPending } = useCreateClient({
    onSuccess: () => {
      navigation(-1);
    },
  });

  const { mutate: deleteClient, isPending: isDeleting } = useDeleteClient({
    onSuccess: () => {
      navigation(-1);
    },
  });

  const { mutate: update } = useUpdateClient({
    onSuccess: () => {
      navigation(-1);
    },
  });

  const onSubmit = (data: FormData) => {
    isEditing
      ? update({
          id,
          clientData: data,
        })
      : create(data);
  };

  useEffect(() => {
    if (isError) {
      notifications.show({
        color: 'red',
        title: 'Erro ao carregar os dados',
        message: 'Verifique os dados e tente novamente',
      });
      navigation(-1);
    }
  }, [isError]);

  return (
    <>
      <DeleteClientModal
        opened={opened}
        data={client}
        onClose={close}
        onConfirm={() => deleteClient({ id: client?.id })}
        isDeleting={isDeleting}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex justify="space-between" direction={{ base: 'column', md: 'row' }} gap="md">
          <Title fz="xl">{isEditing ? 'Editar Cliente' : 'Novo Cliente'}</Title>

          <Flex justify="flex-end" gap="xs" direction={{ base: 'column', md: 'row' }}>
            {isEditing && (
              <Button size="sm" variant="outline" color="red" onClick={open}>
                <IconTrash style={{ width: rem(16) }} stroke={1.5} />
              </Button>
            )}
            <Button variant="outline" onClick={handleGoBack}>
              Cancelar
            </Button>
            <Button variant="filled" type="submit" loading={isPending}>
              Salvar
            </Button>
          </Flex>
        </Flex>

        <Stack gap="xs" mt="md">
          <Paper p="md" pos="relative">
            <LoadingOverlay
              visible={isPending}
              zIndex={1000}
              overlayProps={{ radius: 'sm', blur: 0.3 }}
            />
            <Grid>
              <Grid.Col span={12}>
                <TextInput
                  label="Nome"
                  placeholder="Ex.: João Silva"
                  {...register('name')}
                  error={errors.name?.message}
                  withAsterisk
                />
              </Grid.Col>
              <Grid.Col span={{ sm: 6 }}>
                <TextInput
                  label="E-mail"
                  placeholder="Ex.: joao.silva@email.com"
                  {...register('email')}
                  error={errors.email?.message}
                  withAsterisk
                />
              </Grid.Col>
              <Grid.Col span={{ sm: 6 }}>
                <Controller
                  control={control}
                  name="phone"
                  render={({ field }) => (
                    <InputBase
                      label="Telefone"
                      placeholder="Ex.: (11) 99999-9999"
                      component={IMaskInput}
                      value={field.value || ''}
                      unmask
                      mask={['(00) 0000-0000', '(00) 0 0000-0000']}
                      onAccept={(value) => {
                        field.onChange(value);
                      }}
                      error={errors.phone?.message}
                    />
                  )}
                />
              </Grid.Col>
              <Grid.Col span={{ sm: 6 }}>
                <TextInput
                  label="Empresa (Razão Social)"
                  placeholder="Ex.: JS Tech"
                  {...register('company')}
                  error={errors.company?.message}
                />
              </Grid.Col>
              <Grid.Col span={{ sm: 6 }}>
                <Controller
                  control={control}
                  name="document"
                  render={({ field }) => (
                    <InputBase
                      label="CPF/CNPJ"
                      placeholder="Ex.: 123.456.789-00"
                      component={IMaskInput}
                      value={field.value || ''}
                      unmask
                      mask={['000.000.000-00', '00.000.000/0000-00']}
                      onAccept={(value) => {
                        field.onChange(value);
                      }}
                      error={errors.document?.message}
                    />
                  )}
                />
              </Grid.Col>
              <Grid.Col span={{ sm: 12 }}>
                <TextInput
                  label="Site"
                  placeholder="Ex.: https://js.tech"
                  {...register('site')}
                  error={errors.site?.message}
                />
              </Grid.Col>
            </Grid>
            <Grid>
              <Grid.Col span={12} mt="lg">
                <Divider label="Endereço" labelPosition="left" />
              </Grid.Col>
              <Grid.Col span={{ sm: 3 }}>
                <Controller
                  control={control}
                  name="cep"
                  render={({ field }) => (
                    <InputBase
                      label="CEP"
                      placeholder="Ex.: 12345-678"
                      component={IMaskInput}
                      unmask
                      mask={['00000-000']}
                      onAccept={(value) => {
                        field.onChange(value);
                      }}
                      error={errors.cep?.message}
                    />
                  )}
                />
              </Grid.Col>
              <Grid.Col span={{ sm: 7 }}>
                <TextInput
                  label="Endereço"
                  placeholder="Ex.: Rua das Flores"
                  {...register('street')}
                  error={errors.street?.message}
                />
              </Grid.Col>
              <Grid.Col span={{ sm: 2 }}>
                <TextInput
                  label="N°"
                  placeholder="Ex.: 123"
                  {...register('number')}
                  error={errors.number?.message}
                />
              </Grid.Col>
              <Grid.Col span={{ sm: 3 }}>
                <TextInput
                  label="Bairro"
                  placeholder="Ex.: Centro"
                  {...register('neighborhood')}
                  error={errors.neighborhood?.message}
                />
              </Grid.Col>
              <Grid.Col span={{ sm: 5 }}>
                <TextInput
                  label="Cidade"
                  placeholder="Ex.: São Paulo"
                  {...register('city')}
                  error={errors.city?.message}
                />
              </Grid.Col>
              <Grid.Col span={{ sm: 4 }}>
                <Controller
                  control={control}
                  name="state"
                  render={({ field }) => (
                    <Select
                      label="UF"
                      placeholder="Ex.: SP"
                      data={states}
                      value={field.value}
                      onChange={(value) => field.onChange(value)}
                      error={errors.state?.message}
                    />
                  )}
                />
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
                  autosize
                  minRows={2}
                  {...register('additionalInfo')}
                />
              </Grid.Col>
            </Grid>
          </Paper>

          <Flex justify="flex-end" gap="xs" direction={{ base: 'column', md: 'row' }}>
            <Button variant="outline" onClick={handleGoBack}>
              Cancelar
            </Button>
            <Button variant="filled" type="submit" loading={isPending}>
              Salvar
            </Button>
          </Flex>
        </Stack>
      </form>
    </>
  );
};
