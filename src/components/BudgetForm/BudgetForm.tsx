import { IconTrash } from '@tabler/icons-react';
import { ActionIcon, Flex, Grid, Text } from '@mantine/core';
import { Input } from '../Input';

type BudgetFormProps = {
  onRemove: () => void;
};

export const BudgetForm = ({ onRemove }: BudgetFormProps) => {
  return (
    <Grid w="100%" columns={12}>
      <Grid.Col span={12}>
        <Flex justify="space-between" align="center">
          <Text c="dark.2" fz="xl" fw={700} fs="italic">
            # 2
          </Text>
          <ActionIcon variant="outline" bg="red.4" size="xl" color="white" onClick={onRemove}>
            <IconTrash size={18} />
          </ActionIcon>
        </Flex>
      </Grid.Col>
      <Grid.Col span={12}>
        <Input label="Produto / serviço" />
      </Grid.Col>
      <Grid.Col span={4}>
        <Input label="Quantidade" />
      </Grid.Col>
      <Grid.Col span={4}>
        <Input label="Valor unitário (R$)" leftSection="R$" />
      </Grid.Col>
      <Grid.Col span={4}>
        <Input label="Total (R$)" />
      </Grid.Col>
    </Grid>
  );
};
