import { useEffect, useState } from 'react';
import {
  IconCalendar,
  IconLayoutGrid,
  IconLayoutList,
  IconMenu4,
  IconPlus,
  IconSearch,
} from '@tabler/icons-react';
import { Button, Flex, Group, Menu, rem, Select, Stack, TextInput } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { useDebouncedCallback, useMediaQuery } from '@mantine/hooks';

const MEDIA_QUERYS = {
  MOBILE: '(max-width: 56.25em)',
  TABLET: '(max-width: 56.25em)',
};

type InvoicesPageHeaderProps = {
  onChangeListType: (listType: 'grid' | 'list') => void;
  onChangeStatus: (value: string | null) => void;
  onSearch: (value: string) => void;
  onChangePeriod: (value: [Date | null, Date | null]) => void;
  listType: 'grid' | 'list';
};

export const InvoicesPageHeader = ({
  listType,
  onChangeListType,
  onChangeStatus,
  onChangePeriod,
  onSearch,
}: InvoicesPageHeaderProps) => {
  const matches = useMediaQuery(MEDIA_QUERYS.TABLET);
  const [period, setPeriod] = useState<[Date | null, Date | null]>([null, null]);
  const [querySearch, setQuerySearch] = useState<string>('');
  const [status, setStatus] = useState<string | null>(null);

  const handleChangeStatus = (value: string | null) => {
    setStatus(value);
    onChangeStatus(value);
  };

  const handleDebouncedPeriodChange = useDebouncedCallback((value: [Date | null, Date | null]) => {
    onChangePeriod(value);
  }, 500);

  const handlePeriodChange = (value: [Date | null, Date | null]) => {
    setPeriod(value);
    handleDebouncedPeriodChange(value);
  };

  const handleSearch = useDebouncedCallback((query: string) => {
    onSearch(query);
  }, 500);

  const handlequerySearch = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setQuerySearch(value);
    handleSearch(value);
  };

  useEffect(() => {
    if (matches) {
      onChangeListType('grid');
    }
  }, [matches]);

  return (
    <Flex gap="xs" direction={{ base: 'column', md: 'row' }} mb="md" justify="space-between">
      <Group gap="xs">
        <Select
          flex={1}
          placeholder="status"
          clearable
          w={200}
          size="sm"
          leftSection={<IconMenu4 size={16} stroke={1.5} />}
          leftSectionPointerEvents="none"
          value={status}
          onChange={(v) => handleChangeStatus(v)}
          data={[
            { value: 'draft', label: 'Rascunho' },
            { value: 'pending', label: 'Pendente' },
            { value: 'active', label: 'Ativo' },
            { value: 'completed', label: 'Concluido' },
            { value: 'cancelled', label: 'Cancelado' },
          ]}
        />
        <Menu>
          <Menu.Target>
            <Button
              size="sm"
              variant={period[0] || period[1] ? 'outline' : 'default'}
              c={period[0] || period[1] ? 'estimou' : 'dimmed'}
              p="xs"
            >
              <IconCalendar style={{ width: rem(18) }} stroke={1.5} />
            </Button>
          </Menu.Target>
          <Menu.Dropdown>
            <DatePicker type="range" value={period} onChange={handlePeriodChange} />
            <Stack gap="4" pt="xs">
              <Button fullWidth variant="light" onClick={() => handlePeriodChange([null, null])}>
                Limpar
              </Button>
            </Stack>
          </Menu.Dropdown>
        </Menu>
      </Group>
      <Flex gap="xs" align="flex-start">
        <TextInput
          placeholder="Pesquisar cliente..."
          radius="sm"
          size="sm"
          w={{ base: '100%', md: 300 }}
          leftSection={<IconSearch size={16} stroke={1.5} />}
          value={querySearch}
          onChange={handlequerySearch}
        />

        {!matches && (
          <Button.Group arial-label="List type">
            <Button
              onClick={() => onChangeListType('grid')}
              radius="sm"
              size="sm"
              variant={listType === 'grid' ? 'filled' : 'outline'}
              c={listType === 'grid' ? 'white' : 'estimou'}
              aria-label="Gallery"
            >
              <IconLayoutGrid style={{ width: rem(20) }} stroke={1.5} />
            </Button>
            <Button
              onClick={() => onChangeListType('list')}
              radius="sm"
              size="sm"
              variant={listType === 'list' ? 'filled' : 'outline'}
              c={listType === 'list' ? 'white' : 'estimou'}
              aria-label="Settings"
            >
              <IconLayoutList style={{ width: rem(20) }} stroke={1.5} />
            </Button>
          </Button.Group>
        )}
      </Flex>
      <Button size="sm" leftSection={<IconPlus size={18} stroke={1.5} />} variant="filled" p="xs">
        Criar orçamento
      </Button>
    </Flex>
  );
};
