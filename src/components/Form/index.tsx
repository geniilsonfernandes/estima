import {
  IconBrandBehance,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconCurrencyDollar,
} from '@tabler/icons-react';
import { Box, Divider, Flex, Grid, RingProgress, Stack, Text, Title } from '@mantine/core';
import { CardForm } from '@/components/CardForm';
import { DateInput, Input, NumberInput, Textarea } from '@/components/Input';
import { CollapseStack } from '../CollapseStack';
import { DndList } from '../DndList/DndList';
import { ImageCheckbox } from '../ImageCheckbox/ImageCheckbox';
import { LogoUpload } from '../LogoUpload/LogoUpload';

export const Form = () => {
  return (
    <Stack align="stretch">
      <Flex
        align="center"
        justify="space-between"
        pt="xl"
        pos="sticky"
        top="-16px"
        bg="white"
        pb="xs"
        style={{
          zIndex: 1,
        }}
      >
        <Box>
          <Text c="dark.2" fz="xs">
            Orcamento:
          </Text>
          <Title order={2} c="dark.4">
            P2024-09-1
          </Title>
        </Box>
        <Flex gap="md">
          <RingProgress thickness={3} size={40} sections={[{ value: 80, color: 'estimou' }]} />
        </Flex>
      </Flex>
      <Divider mb="xs" />
      <CardForm
        label="Dados da empresa"
        helpText="Especifique os dados empresa ou de você mesmo. Use o campo de detalhes para especificar seu endereço."
      >
        <Grid my="lg" columns={12}>
          <Grid.Col span={2} pt="sm">
            <LogoUpload />
          </Grid.Col>
          <Grid.Col span={10}>
            <Input label="Nome da empresa" />
          </Grid.Col>
          <Grid.Col span={6}>
            <Input label="CPF/CNPJ" />
          </Grid.Col>
          <Grid.Col span={6}>
            <Input label="Telefone" />
          </Grid.Col>
          <Grid.Col span={6}>
            <Input label="E-mail" />
          </Grid.Col>
          <Grid.Col span={6}>
            <Input label="site" />
          </Grid.Col>
        </Grid>
        <CollapseStack label="Editar detalhes adicionais">
          <Grid>
            <Grid.Col span={6}>
              <Input label="Instagram" leftSection={<IconBrandInstagram />} />
            </Grid.Col>
            <Grid.Col span={6}>
              <Input label="Linkedin" leftSection={<IconBrandLinkedin />} />
            </Grid.Col>
            <Grid.Col span={6}>
              <Input label="Twitter" leftSection={<IconBrandTwitter />} />
            </Grid.Col>
            <Grid.Col span={6}>
              <Input label="Behance" leftSection={<IconBrandBehance />} />
            </Grid.Col>
          </Grid>
        </CollapseStack>
      </CardForm>
      <CardForm
        label="Dados da cliente"
        helpText="Especifique o nome do seu cliente. Use os campos para especificar as informações de contato do cliente."
      >
        <Grid my="lg" columns={12}>
          <Grid.Col span={12}>
            <Input label="Nome do solicitante" />
          </Grid.Col>
          <Grid.Col span={6}>
            <Input label="Nome da empresa" />
          </Grid.Col>
          <Grid.Col span={6}>
            <Input label="CPF/CNPJ" />
          </Grid.Col>
          <Grid.Col span={6}>
            <Input label="Telefone" />
          </Grid.Col>
          <Grid.Col span={6}>
            <Input label="E-mail" />
          </Grid.Col>
        </Grid>
      </CardForm>
      <CardForm
        label="Itens do orçamento"
        helpText="You can add links to websites you want hiring managers to see!"
      >
        <Box pt="sm">
          <DndList />
        </Box>
      </CardForm>
      <CardForm
        label="Dados do orçamento"
        helpText="Especifique o nome do seu cliente. Use os campos para especificar as informações de contato do cliente."
      >
        <Grid pt="sm">
          <Grid.Col span={4}>
            <Input label="Número do orçamento" type="number" />
          </Grid.Col>
          <Grid.Col span={4}>
            <DateInput label="data" />
          </Grid.Col>
          <Grid.Col span={4}>
            <DateInput label="Vencimento" />
          </Grid.Col>
          <Grid.Col span={6}>
            <NumberInput
              label="Acréscimo (R$)"
              leftSection={<IconCurrencyDollar />}
              decimalSeparator=","
              hideControls
              left="R$"
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <NumberInput
              label="Desconto (R$)"
              leftSection={<IconCurrencyDollar />}
              decimalSeparator=","
              hideControls
              left="R$"
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <Textarea label="Observações" variant="filled" autosize minRows={2} />
          </Grid.Col>
        </Grid>
      </CardForm>
      <CardForm label="Formas de pagamento" helpText="You can add links to websites">
        <Grid my="lg">
          <Grid.Col span={6}>
            <ImageCheckbox title="Boleto" />
          </Grid.Col>
          <Grid.Col span={6}>
            <ImageCheckbox title="Cartão de Crédito" />
          </Grid.Col>
          <Grid.Col span={6}>
            <ImageCheckbox title="Cartão de Debito" />
          </Grid.Col>
          <Grid.Col span={6}>
            <ImageCheckbox title="Pix" />
          </Grid.Col>
          <Grid.Col span={6}>
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
