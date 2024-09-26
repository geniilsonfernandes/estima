import {
  IconCategory,
  IconChevronLeft,
  IconChevronRight,
  IconDotsVertical,
  IconEye,
  IconHelpSquareRoundedFilled,
  IconReplace,
} from '@tabler/icons-react';
import { ActionIcon, Box, Button, Flex, Stack, Text } from '@mantine/core';
import { Form } from '@/components/Form';

export function HomePage() {
  return (
    <Flex w="100%" pos="relative">
      <ActionIcon
        pos="fixed"
        left="16px"
        bottom={16}
        variant="transparent"
        color="dark.4"
        size="xl"
        mt="sm"
        style={{
          zIndex: 1,
        }}
      >
        <IconHelpSquareRoundedFilled size={67} />
      </ActionIcon>
      <Box p="lg" flex={1}>
        <Flex align="center" justify="space-between" mt="sm">
          <ActionIcon variant="light" color="dark.4" size="lg">
            <IconCategory size={24} />
          </ActionIcon>
          <Flex gap="md">
            <Button variant="outline" color="dark">
              Salvar alterações
            </Button>
            <Button variant="filled" color="dark">
              Salvar e enviar
            </Button>
          </Flex>
        </Flex>
        <Form />
      </Box>
      <Flex h="100vh" px="lg" py="lg" flex={1} pos="sticky" top="0" direction="column">
        <Stack
          p="lg"
          bg="dark"
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
      </Flex>
    </Flex>
  );
}
