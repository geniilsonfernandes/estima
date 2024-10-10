import { Flex, Text, Title } from '@mantine/core';
import { SearchInput } from '@/shared/components/SearchInput/SearchInput';

export const TemplateSelectHeader = () => {
  return (
    <Flex
      py="80px"
      px="xl"
      w="100%"
      bg="estimou.9"
      gap="xl"
      justify="space-between"
      direction={{ base: 'column', md: 'row' }}
    >
      <span>
        <Title order={4} c="white">
          Selecione um modelo de orçamento
        </Title>
        <Text c="estimou.2" fz="sm" ml="auto">
          Escolha entre diversas opções para facilitar a criação dos seus orçamentos
        </Text>
      </span>

      <SearchInput placeholder="Pesquisar template" variant="filled" />
    </Flex>
  );
};
