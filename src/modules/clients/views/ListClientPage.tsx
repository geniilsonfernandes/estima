import { useState } from 'react';
import { IconPlus, IconSearch } from '@tabler/icons-react';
import { QueryClient } from '@tanstack/react-query';
import { Link, useNavigate } from 'react-router';
import { Button, Flex, Loader, rem, SimpleGrid, Stack, TextInput } from '@mantine/core';
import { useDebouncedCallback } from '@mantine/hooks';
import { Empty } from '@/shared/components/Empty';
import { Pagination } from '@/shared/components/Pagination';
import { Budget, BudgetsDrawer } from '../components/BudgetDrawer';
import { ClientCard } from '../components/ClientCard';
import { ClientDrawer } from '../components/ClientDrawer/ClientDrawer';
import { DeleteClientModal } from '../components/DeleteClientModal';
import { FilterDrawer } from '../components/FilterDrawer';
import { useDeleteClient } from '../hooks/useDeleteClient';
import { ClientListQuery, ListClientsQuery, useListClient } from '../hooks/useListClient';
import { Client } from '../model/client';

export const loader = (queryClient: QueryClient) => async () => {
  await queryClient.prefetchQuery(ClientListQuery());
  return {};
};

const ListClientPage = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<ListClientsQuery>({});
  const [clientDrawerData, setClientDrawerData] = useState<Client>();
  const [clientToDelete, setClientToDelete] = useState<Client>();
  const [budgetDrawerData, setBudgetDrawerData] = useState<Budget>();
  const [page, setPage] = useState(1);
  const { data: clients, isFetching } = useListClient(filter, page);

  const { mutate: deleteClient, isPending: isDeleting } = useDeleteClient({
    onSuccess: () => {
      setClientToDelete(undefined);
    },
  });

  const handlePreviousPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleBudgetDrawerOpen = (budget?: Budget) => {
    setBudgetDrawerData(budget);
  };

  const handleBudgetDrawerClose = () => {
    setBudgetDrawerData(undefined);
  };

  const handleSetFilter = (filter: ListClientsQuery) => {
    setFilter(filter);
  };

  const handleSearch = useDebouncedCallback((query: string) => {
    setFilter({ name: query });
  }, 500);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
    handleSearch(event.currentTarget.value);
  };

  return (
    <>
      <Flex gap="xs" direction={{ base: 'column', md: 'row' }} mb="md" justify="space-between">
        <Flex gap="xs">
          <TextInput
            placeholder="Pesquisar cliente..."
            radius="sm"
            size="sm"
            name="q"
            w={{ base: '100%', md: 300 }}
            leftSection={<IconSearch size={16} stroke={1.5} />}
            rightSection={isFetching && <Loader size="xs" color="gray" />}
            value={search}
            onChange={handleChange}
          />
          <FilterDrawer onFilter={handleSetFilter} />
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
      {clients?.data.length === 0 && (
        <Empty
          h="calc(100vh - 180px)"
          title="Nenhum cliente encontrado"
          description="
         Nenhum cliente foi encontrado com o nome digitado. Tente novamente ou clique no botão de filtro."
          onleftButtonClick={() => setFilter({})}
          textLeftButton="Limpar filtros"
          textRightButton="Criar cliente"
          onrightButtonClick={() => navigate('create')}
        />
      )}

      {clients?.data.map((client) => (
        <Stack gap="xs" justify="space-between" mih="calc(100vh - 180px)">
          <SimpleGrid cols={1}>
            <ClientCard
              key={client.id}
              data={client}
              onView={() => setClientDrawerData(client)}
              onEdit={() => navigate(`edit/${client.id}`)}
              onDelete={() => setClientToDelete(client)}
              onViewBudgets={() => handleBudgetDrawerOpen({ id: client.id })}
            />
          </SimpleGrid>
          <Pagination
            info={`${clients?.page} de ${clients?.totalPages} páginas`}
            hasNextPage={clients?.hasNextPage}
            prevPage={handlePreviousPage}
            hasPreviousPage={clients?.hasPreviousPage}
            nextPage={handleNextPage}
          />
        </Stack>
      ))}

      <ClientDrawer
        opened={!!clientDrawerData}
        onClose={() => setClientDrawerData(undefined)}
        data={clientDrawerData}
      />

      <BudgetsDrawer
        opened={!!budgetDrawerData}
        onClose={handleBudgetDrawerClose}
        data={clientDrawerData}
      />

      <DeleteClientModal
        opened={!!clientToDelete}
        data={clientToDelete}
        onClose={() => setClientToDelete(undefined)}
        onConfirm={() => deleteClient({ id: clientToDelete?.id })}
        isDeleting={isDeleting}
      />
    </>
  );
};

export default ListClientPage;
