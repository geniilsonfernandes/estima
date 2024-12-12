import { useState } from 'react';
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

type Filter = {
  name?: string;
  email?: string;
  phone?: string;
};
type FilterDrawerProps = {
  onFilter: (filters: Filter) => void;
};

export const FilterDrawer = ({ onFilter }: FilterDrawerProps) => {
  const [filters, setFilters] = useState<Filter>({
    name: '',
    email: '',
    phone: '',
  });
  const [opened, { open, close }] = useDisclosure(false);

  const handleFilters = (filters: Partial<Filter>) => {
    setFilters((prev) => ({ ...prev, ...filters }));
  };

  const handleAplyFilters = () => {
    onFilter(filters);
    close();
  };

  const handleClearFilters = () => {
    setFilters({});
    onFilter({});
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
              <TextInput
                placeholder="Nome"
                onChange={(e) => handleFilters({ name: e.target.value })}
                value={filters.name}
                label="Filtro por nome"
              />
              <TextInput
                placeholder="Telefone"
                onChange={(e) => handleFilters({ phone: e.target.value })}
                value={filters.phone}
                label="Filtro por telefone"
              />
              <TextInput
                placeholder="Email"
                onChange={(e) => handleFilters({ email: e.target.value })}
                value={filters.email}
                label="Filtro por email"
              />
            </SimpleGrid>
            <Divider my="sm" mt="xl" />
            <Flex justify="flex-end" direction={{ base: 'column', md: 'row' }} gap="sm">
              <Button variant="default" onClick={handleClearFilters}>
                Limpar filtro
              </Button>
              <Button onClick={handleAplyFilters} disabled={!Object.keys(filters).length}>
                Aplicar filtro
              </Button>
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
