import {
  IconBrandBehance,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
} from '@tabler/icons-react';
import { Grid } from '@mantine/core';
import { CardForm } from '@/shared/components/CardForm';
import { Input, InputMask } from '@/shared/components/Input';

export const FormShowcase = () => {
  return (
    <CardForm
      label="Dados da empresa"
      helpText="Especifique os dados empresa ou de você mesmo. Use o campo de detalhes para especificar seu endereço."
    >
      <Grid my="lg" gutter="xs" columns={12}>
        <Grid.Col span={6}>
          <InputMask label="CPF/CNPJ" mask={['000.000.000-00', '00.000.000/0000-00']} />
        </Grid.Col>
        <Grid.Col span={6}>
          <InputMask label="Telefone" mask="(00) 00000-0000" />
        </Grid.Col>
        <Grid.Col span={6}>
          <Input label="E-mail" />
        </Grid.Col>
        <Grid.Col span={6}>
          <Input label="site" />
        </Grid.Col>
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
    </CardForm>
  );
};
