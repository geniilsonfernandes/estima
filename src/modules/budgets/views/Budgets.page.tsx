import { useEffect, useState } from 'react';
import { Box, Flex, Grid } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { InvoiceCard } from '@/shared/components/InvoiceCard';
import { InvoicesPageHeader } from '@/shared/components/InvoicesPageHeader';
import { Pagination } from '@/shared/components/Pagination/Pagination';
import { DataTable } from '@/shared/components/Table/DataTable';
import useBudgets from '@/shared/hooks/useBudgets';
import { Budget } from '@/shared/models';

const MEDIA_QUERYS = {
  MOBILE: '(max-width: 56.25em)',
  TABLET: '(max-width: 56.25em)',
};

export const BudgetsPage = () => {
  const [filters, setFilters] = useState<{
    status: string | null;
    client: string | null;
    period: [Date | null, Date | null];
  }>({
    status: null,
    client: null,
    period: [null, null],
  });
  const { budgets, hasNextPage, hasPreviousPage, handleNextPage, handlePrevPage, paginationInfo } =
    useBudgets({
      filter: filters,
      pageSize: 12,
    });
  const matches = useMediaQuery(MEDIA_QUERYS.TABLET);
  const [listType, setListType] = useState<'grid' | 'list'>('grid');

  const handleSetStatus = (value: string | null) => {
    setFilters({ ...filters, status: value });
  };

  const handleSetClient = (value: string | null) => {
    setFilters({ ...filters, client: value });
  };

  const handleSetPeriod = (value: [Date | null, Date | null]) => {
    setFilters({ ...filters, period: value });
  };

  useEffect(() => {
    if (matches) {
      setListType('grid');
    }
  }, [matches]);

  const invoice = {
    id: '1',
    client: 'João da Silva',
    status: 'active',
    total: 100,
    dueDate: '2023-01-01',
  } as Budget;

  return (
    <Box pos="relative">
      <InvoicesPageHeader
        listType={listType}
        onChangeStatus={handleSetStatus}
        onChangeListType={setListType}
        onSearch={handleSetClient}
        onChangePeriod={handleSetPeriod}
      />
      <Flex direction="column" flex={1} justify="space-between">
        {listType === 'list' && <DataTable data={budgets} />}
        {listType === 'grid' && (
          <Grid gutter="lg" flex={1}>
            {budgets.map((item) => (
              <Grid.Col
                span={{
                  xs: 12,
                  sm: 6,
                  md: 6,
                  lg: 4,
                  xl: 3,
                }}
                key={item.id}
              >
                <InvoiceCard data={item} />
              </Grid.Col>
            ))}
          </Grid>
        )}

        <InvoiceCard {...invoice} variant="compact" />
        <InvoiceCard {...invoice} variant="detailed" />

        <Pagination
          info={paginationInfo}
          hasNextPage={hasNextPage}
          hasPreviousPage={hasPreviousPage}
          nextPage={handleNextPage}
          prevPage={handlePrevPage}
        />
      </Flex>
    </Box>
  );
};
