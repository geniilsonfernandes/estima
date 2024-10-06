import { IconCurrencyDollar } from '@tabler/icons-react';
import { Grid } from '@mantine/core';
import { Input, InputMask } from '@/shared/components/Input';
import { formatCurrency } from '@/shared/utils/formatCurrency';
import { onlyNumber } from '@/shared/utils/onlyNumber';
import { IService, useBuilderStore } from '../../store';

type ServiceFormProps = { index: number } & IService;

export const ServiceForm = ({ index }: ServiceFormProps) => {
  const { updateService, services } = useBuilderStore((state) => state);

  return (
    <Grid w="100%" columns={12} aria-label={`item-${index}`}>
      <Grid.Col span={12}>
        <Input
          label="Produto / serviço"
          onChange={(e) => updateService(index, { name: e.target.value })}
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <Input
          label="Quantidade"
          onChange={(e) => updateService(index, { quantity: Number(e.target.value) })}
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <InputMask
          label="Valor unitário (R$)"
          leftSection={<IconCurrencyDollar />}
          mask="num"
          blocks={{
            num: {
              mask: Number,
              min: 0,
              thousandsSeparator: '.',
            },
          }}
          onAccept={(value) => updateService(index, { price: onlyNumber(value) })}
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <Input
          disabled
          label="Total (R$)"
          value={formatCurrency(services[index].price * services[index].quantity)}
        />
      </Grid.Col>
    </Grid>
  );
};
