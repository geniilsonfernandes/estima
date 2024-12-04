import { Button, Flex, Text } from '@mantine/core';

type PaginationProps = {
  nextPage?: () => void;
  prevPage?: () => void;
  info?: string;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
};
export const Pagination = ({
  hasNextPage,
  hasPreviousPage,
  info = '0 de 0',
  nextPage,
  prevPage,
}: PaginationProps) => {
  return (
    <Flex justify="space-between" align="center" pt="md" gap="xs">
      <Text size="xs" c="dimmed" fw={600}>
        {info}
      </Text>
      <Flex gap="xs">
        <Button variant="outline" disabled={!hasPreviousPage} onClick={prevPage}>
          Anterior
        </Button>
        <Button variant="outline" disabled={!hasNextPage} onClick={nextPage}>
          Proximo
        </Button>
      </Flex>
    </Flex>
  );
};
