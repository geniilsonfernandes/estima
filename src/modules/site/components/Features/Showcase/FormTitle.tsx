import { Flex, RingProgress, Text, Title } from '@mantine/core';

export const FormTitle = () => {
  return (
    <Flex
      align="center"
      justify="space-between"
      py="xl"
      pos="sticky"
      top="0"
      p="md"
      pb="md"
      style={{
        zIndex: 100,
      }}
    >
      <span>
        <Text c="dark.2" fz="xs">
          Orcamento:
        </Text>
        <Title order={2} c="dark.4">
          P2024-09-1
        </Title>
      </span>
      <Flex gap="md">
        <RingProgress thickness={3} size={40} sections={[{ value: 80, color: 'estimou' }]} />
      </Flex>
    </Flex>
  );
};
