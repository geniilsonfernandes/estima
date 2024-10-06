import { Box, BoxComponentProps, Card, Text, Title } from '@mantine/core';

type CardFormProps = {
  label: string;
  helpText?: string;
  children?: React.ReactNode;
  contentProps?: BoxComponentProps;
};

export const CardForm = ({ label, helpText, children, contentProps }: CardFormProps) => {
  return (
    <Card p="lg" bg="#F9F9F9">
      <Title order={3} c="dark.4">
        {label}
      </Title>
      <Text c="dark.2" fz="sm" mt={6}>
        {helpText}
      </Text>
      <Box {...contentProps}>{children}</Box>
    </Card>
  );
};
