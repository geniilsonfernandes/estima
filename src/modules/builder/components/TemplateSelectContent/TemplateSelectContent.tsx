import { Flex, Grid, Stack, Text } from '@mantine/core';
import { TemplateButton } from '@/shared/components/TemplateButton/TemplateButton';

type TemplateSelectProps = {
  setTemplate?: (template: string) => void;
  label: string;
  icon: JSX.Element;
};

export const TemplateSelectContent = ({ setTemplate, label, icon }: TemplateSelectProps) => {
  return (
    <Stack>
      <Flex c="gray.7" pt="xl">
        {icon}
        <Text fz="sm" ml="sm" fw={500}>
          {label}
        </Text>
      </Flex>

      <Grid>
        {['Brownie', 'Cupcake', 'Cupcake', 'Cupcake', 'Cupcake', 'Cupcake'].map((item) => (
          <Grid.Col
            span={{
              xs: 6,
              sm: 6,
              md: 4,
              lg: 3,
            }}
            key={item}
            mb="lg"
          >
            <TemplateButton key={item} label={item} onClick={() => setTemplate?.('Brownie')} />
          </Grid.Col>
        ))}
      </Grid>
    </Stack>
  );
};
