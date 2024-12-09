import { IconFilter, IconInfoCircle } from '@tabler/icons-react';
import {
  Alert,
  Box,
  Button,
  Divider,
  Drawer,
  Flex,
  rem,
  SimpleGrid,
  Stack,
  TextInput,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export const FilterDrawer = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const handleClose = () => {
    close();
  };
  return (
    <>
      <Drawer
        opened={opened}
        position="left"
        offset={8}
        radius="md"
        onClose={close}
        title="Filtros"
      >
        <Stack>
          <Box>
            <Alert variant="light" color="gray" icon={<IconInfoCircle />}>
              Selecione um ou mais filtros para filtrar os clientes
            </Alert>
            <Divider my="sm" />
            <SimpleGrid>
              <TextInput placeholder="Nome" label="Filtro por nome" />
              <TextInput placeholder="Telefone" label="Filtro por telefone" />
              <TextInput placeholder="Email" label="Filtro por email" />
            </SimpleGrid>
            <Divider my="sm" mt="xl" />
            <Flex justify="flex-end" direction={{ base: 'column', md: 'row' }} gap="sm">
              <Button variant="default" onClick={handleClose}>
                Limpar filtro
              </Button>
              <Button>Aplicar filtro</Button>
            </Flex>
          </Box>
        </Stack>
      </Drawer>

      <Button size="sm" variant="default" p="xs" onClick={open}>
        <IconFilter style={{ width: rem(18) }} stroke={1.5} />
      </Button>
    </>
  );
};
