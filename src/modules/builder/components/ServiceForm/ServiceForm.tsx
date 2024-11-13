import { Grid } from '@mantine/core';
import { Input } from '@/shared/components/Input';
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
    </Grid>
  );
};
