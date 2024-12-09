// TODO : CRIAR UMA HEADER QUE DA PARA USAR EM TODAS AS PAGINAS
// posso criar em formado de compound components e ser o primeiro componente do storybook

import { useState } from 'react';
import { IconPlus, IconSearch } from '@tabler/icons-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Flex, rem, Stack, TextInput } from '@mantine/core';
import { Pagination } from '@/shared/components/Pagination';
import { ClientCard } from '../components/ClientCard';
import { ClientDrawer } from '../components/ClientDrawer/ClientDrawer';
import { FilterDrawer } from '../components/FilterDrawer';
import { Client, mockClients } from './Client.page';

export const ListClientPage = () => {
  const [clientToView, setClientToView] = useState<Client>();
  const navigate = useNavigate();

  return (
    <div>
      <Flex gap="xs" direction={{ base: 'column', md: 'row' }} mb="md" justify="space-between">
        <Flex gap="xs">
          <TextInput
            placeholder="Pesquisar cliente..."
            radius="sm"
            size="sm"
            w={{ base: '100%', md: 300 }}
            leftSection={<IconSearch size={16} stroke={1.5} />}
          />
          <FilterDrawer />
        </Flex>

        <Button
          size="sm"
          leftSection={<IconPlus style={{ width: rem(18) }} stroke={1.5} />}
          variant="filled"
          p="xs"
          component={Link}
          to="/clients/create"
        >
          Criar cliente
        </Button>
      </Flex>

      <Stack gap="xs">
        {mockClients.map((client) => (
          <ClientCard
            key={client.id}
            {...client}
            onView={() => setClientToView(client)}
            onEdit={() => navigate(`/clients/edit/${client.id}`)}
          />
        ))}
        <Pagination
          info="1 de 5"
          hasNextPage
          hasPreviousPage
          nextPage={() => console.log('Próxima página')}
          prevPage={() => console.log('Página anterior')}
        />
      </Stack>

      <ClientDrawer
        opened={!!clientToView}
        close={() => setClientToView(undefined)}
        data={clientToView}
      />
    </div>
  );
};
