import {
  IconChevronLeft,
  IconChevronRight,
  IconDotsVertical,
  IconEye,
  IconReplace,
} from '@tabler/icons-react';
import { ActionIcon, Box, Button, Flex, Stack, Text } from '@mantine/core';

export const Preview = () => {
  return (
    <Stack
      p="lg"
      bg="gray"
      h="100%"
      justify="space-between"
      style={{
        borderRadius: '8px',
        boxShadow: 'rgb(149 157 165 / 53%) -6px 7px 24px',
      }}
    >
      <Flex align="center" justify="space-between">
        <Flex gap="sm">
          <Button variant="solid" bg="dark.3" leftSection={<IconReplace size={18} />} size="sm">
            Seleciona modelo
          </Button>
        </Flex>
        <Flex gap="sm">
          <ActionIcon variant="outline" color="white" size="lg">
            <IconEye color="white" size={18} />
          </ActionIcon>
          <ActionIcon variant="outline" color="white" size="lg">
            <IconDotsVertical color="white" size={18} />
          </ActionIcon>
        </Flex>
      </Flex>

      <Box h="80%" w="60%" bg="white" mx="auto" />

      <Flex align="center" justify="center">
        <ActionIcon variant="subtle" color="white" size="md">
          <IconChevronLeft />
        </ActionIcon>
        <Text c="white" mx="sm" size="xs">
          1 de 1
        </Text>
        <ActionIcon variant="subtle" color="white" size="md">
          <IconChevronRight />
        </ActionIcon>
      </Flex>
    </Stack>
  );
};
