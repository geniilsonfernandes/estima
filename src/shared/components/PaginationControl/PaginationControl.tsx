import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { ActionIcon, Flex, Text } from '@mantine/core';

export function PaginationControl() {
  return (
    <Flex
      pos="absolute"
      bg="estimou.9"
      gap="xs"
      style={{
        transform: 'translate(-50%, -50%)',
        left: '50%',
        bottom: 32,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '16px',
      }}
      p="4"
    >
      <ActionIcon variant="light" radius="xl" color="white" size="md">
        <IconChevronLeft />
      </ActionIcon>
      <Flex align="center" gap="xs" fz="sm" c="white" opacity={0.8}>
        <Text fz="sm">1</Text>
        <Text fz="xs">/</Text>
        <Text fz="sm">5</Text>
      </Flex>
      <ActionIcon variant="light" radius="xl" color="white" size="md">
        <IconChevronRight />
      </ActionIcon>
    </Flex>
  );
}
