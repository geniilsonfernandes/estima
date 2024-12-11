// TODO : CRIAR UMA HEADER QUE DA PARA USAR EM TODAS AS PAGINAS
// posso criar em formado de compound components e ser o primeiro componente do storybook

import { useState } from 'react';
import { IconPlus, IconSearch } from '@tabler/icons-react';
import { Link, useLoaderData, useNavigate, useNavigation } from 'react-router';
import { Button, Flex, rem, SimpleGrid, Stack, TextInput } from '@mantine/core';
import { Pagination } from '@/shared/components/Pagination';
import { Budget, BudgetsDrawer } from '../components/BudgetDrawer';
import { ClientCard } from '../components/ClientCard';
import { ClientDrawer } from '../components/ClientDrawer/ClientDrawer';
import { FilterDrawer } from '../components/FilterDrawer';
import { Client, mockClients } from './Client.page';

export const ListClientPage = () => {
  const loader = useLoaderData();
  const { state } = useNavigation();
  const navigate = useNavigate();
  const [clientDrawerData, setClientDrawerData] = useState<Client>();
  const [budgetDrawerData, setBudgetDrawerData] = useState<Budget>();

  const handleClientDrawerOpen = (client?: Client) => {
    setClientDrawerData(client);
  };

  const handleBudgetDrawerOpen = (budget?: Budget) => {
    setBudgetDrawerData(budget);
  };

  const handleClientDrawerClose = () => {
    setClientDrawerData(undefined);
  };

  const handleBudgetDrawerClose = () => {
    setBudgetDrawerData(undefined);
  };

  return (
    <>
      {JSON.stringify(loader, null, 2)}
      {state}

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
          to="create"
        >
          Criar cliente
        </Button>
      </Flex>

      <Stack gap="xs" justify="space-between" mih="calc(100vh - 180px)">
        <SimpleGrid cols={1}>
          {mockClients.map((client) => (
            <ClientCard
              key={client.id}
              {...client}
              onView={() => handleClientDrawerOpen(client)}
              onEdit={() => navigate(`edit/${client.id}`)}
              onViewBudgets={() => handleBudgetDrawerOpen({ id: client.id })}
            />
          ))}
        </SimpleGrid>
        <Pagination
          info="1 de 5"
          hasNextPage
          hasPreviousPage
          nextPage={() => console.log('Próxima página')}
          prevPage={() => console.log('Página anterior')}
        />
      </Stack>

      <ClientDrawer
        opened={!!clientDrawerData}
        onClose={() => handleClientDrawerClose()}
        data={clientDrawerData}
      />

      <BudgetsDrawer
        opened={!!budgetDrawerData}
        onClose={handleBudgetDrawerClose}
        data={clientDrawerData}
      />
    </>
  );
};
