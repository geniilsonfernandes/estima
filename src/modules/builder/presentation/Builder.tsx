import { IconEye } from '@tabler/icons-react';
import { Box, Button, Flex, Modal, RingProgress, Text, Title } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Preview } from '@/modules/builder/components/Preview/Preview';
import { NavbarMinimal } from '@/shared/components/NavbarLink/NavbarLink';
import { FormBuilder } from '../components/FormBuilder/FormBuilder';
import { TemplateSelect } from '../components/TemplateSelect/TemplateSelect';

export const Builder = () => {
  const matches = useMediaQuery('(min-width: 56.25em)');
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Flex w="100%" pos="relative">
      <Flex h="100vh" pos="sticky" top="0" direction="column">
        <NavbarMinimal />
      </Flex>

      {!matches && (
        <Button
          pos="fixed"
          right="16px"
          bottom={16}
          variant="solid"
          leftSection={<IconEye size={18} />}
          size="sm"
          onClick={open}
          style={{
            zIndex: 9999,
          }}
        >
          Visualizar orçamento
        </Button>
      )}
      <Box flex={1} pb="xl">
        <Flex
          align="center"
          justify="space-between"
          py="xl"
          pos="sticky"
          top="0"
          bg="white"
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
        <FormBuilder />
      </Box>
      {matches && (
        <Flex h="100vh" px="lg" py="lg" flex={1} pos="sticky" top="0" direction="column">
          <Preview />
        </Flex>
      )}
      <Modal opened={opened} onClose={close} centered fullScreen>
        <Preview />
      </Modal>
      <TemplateSelect />
    </Flex>
  );
};
