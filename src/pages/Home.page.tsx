import { IconFile } from '@tabler/icons-react';
import { ActionIcon, Box, Button, Flex, Modal } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Form } from '@/components/Form';
import { NavbarMinimal } from '@/components/NavbarLink/NavbarLink';
import { Preview } from '@/components/Preview/Preview';

export function HomePage() {
  const matches = useMediaQuery('(min-width: 56.25em)');
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Flex w="100%" pos="relative">
      <Flex h="100vh" pos="sticky" top="0" direction="column">
        <NavbarMinimal />
      </Flex>

      {!matches && (
        <ActionIcon
          pos="fixed"
          right="16px"
          bottom={16}
          radius="24px"
          size="68px"
          style={{
            zIndex: 1,
          }}
          onClick={open}
        >
          <IconFile />
        </ActionIcon>
      )}
      <Box p="lg" flex={1}>
        <Flex align="center" justify="space-between" mt="sm">
          <Flex gap="md">
            <Button variant="outline">Salvar alterações</Button>
            <Button variant="filled">Salvar e enviar</Button>
          </Flex>
        </Flex>
        <Form />
      </Box>
      {matches && (
        <Flex h="100vh" px="lg" py="lg" flex={1} pos="sticky" top="0" direction="column">
          <Preview />
        </Flex>
      )}
      <Modal opened={opened} onClose={close} centered fullScreen>
        <Preview />
      </Modal>
    </Flex>
  );
}
