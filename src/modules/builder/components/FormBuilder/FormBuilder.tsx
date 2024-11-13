import {
  IconBrandBehance,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconCurrencyDollar,
} from '@tabler/icons-react';
import { Flex, Grid, Stack } from '@mantine/core';
import { CardForm } from '@/shared/components/CardForm';
import { CollapseStack } from '@/shared/components/CollapseStack';
import { ImageCheckbox } from '@/shared/components/ImageCheckbox/ImageCheckbox';
import { DateInput, Input, InputMask, Textarea } from '@/shared/components/Input';
import { LogoUpload } from '@/shared/components/LogoUpload/LogoUpload';
import { useBuilderStore } from '../../store';
import { ServiceList } from '../ServiceList/ServiceList';

export const FormBuilder = () => {
  const { updateCompany, updateCustomer } = useBuilderStore((state) => state);

  return (
    <Stack px="lg" align="stretch">
      <CardForm
        label="Dados da empresa"
        helpText="Especifique os dados empresa ou de você mesmo. Use o campo de detalhes para especificar seu endereço."
      >
        <Grid my="lg" gutter="xs" columns={12}>
          <Grid.Col span={12}>
            <Flex gap="sm">
              <LogoUpload />
              <Input
                label="Nome da empresa"
                flex={1}
                onChange={(e) => updateCompany({ name: e.target.value })}
              />
            </Flex>
          </Grid.Col>
          <Grid.Col span={6}>
            <InputMask
              label="CPF/CNPJ"
              mask={['000.000.000-00', '00.000.000/0000-00']}
              onAccept={(value) => updateCompany({ doc: value })}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <InputMask
              label="Telefone"
              mask="(00) 00000-0000"
              onAccept={(value) => updateCompany({ phone: value })}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Input label="E-mail" onChange={(e) => updateCompany({ email: e.target.value })} />
          </Grid.Col>
          <Grid.Col span={6}>
            <Input label="site" onChange={(e) => updateCompany({ site: e.target.value })} />
          </Grid.Col>
        </Grid>
        <CollapseStack label="Editar detalhes adicionais">
          <Grid>
            <Grid.Col span={6}>
              <Input
                label="Instagram"
                leftSection={<IconBrandInstagram />}
                onChange={(e) => updateCompany({ instagram: e.target.value })}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Input
                label="Linkedin"
                leftSection={<IconBrandLinkedin />}
                onChange={(e) => updateCompany({ linkedin: e.target.value })}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Input
                label="Twitter"
                leftSection={<IconBrandTwitter />}
                onChange={(e) => updateCompany({ twitter: e.target.value })}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Input
                label="Behance"
                leftSection={<IconBrandBehance />}
                onChange={(e) => updateCompany({ behance: e.target.value })}
              />
            </Grid.Col>
          </Grid>
        </CollapseStack>
      </CardForm>
      <CardForm
        label="Dados da cliente"
        helpText="Especifique o nome do seu cliente. Use os campos para especificar as informações de contato do cliente."
      >
        <Grid my="lg">
          <Grid.Col span={12}>
            <Input
              label="Nome do solicitante"
              onChange={(e) => updateCustomer({ name: e.target.value })}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Input
              label="Nome da empresa"
              onChange={(e) => updateCustomer({ name: e.target.value })}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <InputMask
              label="CPF/CNPJ"
              mask={['000.000.000-00', '00.000.000/0000-00']}
              onAccept={(value) => updateCustomer({ doc: value })}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <InputMask
              label="Telefone"
              mask="(00) 00000-0000"
              accept=""
              onAccept={(value) => updateCustomer({ phone: value })}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Input label="E-mail" onChange={(e) => updateCustomer({ email: e.target.value })} />
          </Grid.Col>
        </Grid>
      </CardForm>
      <CardForm
        label="Itens do orçamento"
        helpText="You can add links to websites you want hiring managers to see!"
        contentProps={{ pt: 'md' }}
      >
        <ServiceList />
      </CardForm>
      <CardForm
        label="Dados do orçamento"
        helpText="Especifique o nome do seu cliente. Use os campos para especificar as informações de contato do cliente."
      >
        <Grid pt="sm">
          <Grid.Col span={12}>
            <Input label="Número do orçamento" type="number" />
          </Grid.Col>
          <Grid.Col span={6}>
            <DateInput label="data" />
          </Grid.Col>
          <Grid.Col span={6}>
            <DateInput label="Vencimento" />
          </Grid.Col>
          <Grid.Col span={6}>
            <InputMask
              label="Acréscimo (R$)"
              leftSection={<IconCurrencyDollar />}
              mask="num"
              blocks={{
                num: {
                  mask: Number,
                  min: 0,
                  thousandsSeparator: '.',
                },
              }}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <InputMask
              label="Desconto (R$)"
              leftSection={<IconCurrencyDollar />}
              mask="num"
              blocks={{
                num: {
                  mask: Number,
                  min: 0,
                  thousandsSeparator: '.',
                },
              }}
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <Textarea label="Observações" variant="filled" autosize minRows={2} />
          </Grid.Col>
        </Grid>
      </CardForm>
      <CardForm label="Formas de pagamento" helpText="You can add links to websites">
        <Grid my="lg">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <ImageCheckbox title="Boleto" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <ImageCheckbox title="Cartão de Crédito" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <ImageCheckbox title="Cartão de Debito" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <ImageCheckbox title="Pix" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <ImageCheckbox title="Transferência" />
          </Grid.Col>
        </Grid>
      </CardForm>
      <CardForm label="Notas do orçamento" helpText="You can add links to websites">
        <Grid my="lg">
          <Grid.Col span={12}>
            <Textarea label="Observações" variant="filled" autosize minRows={5} />
          </Grid.Col>
        </Grid>
      </CardForm>
    </Stack>
  );
};
