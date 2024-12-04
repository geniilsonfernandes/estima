import { Button, Flex, Text } from '@mantine/core';

type PaginationProps = {
  nextPage?: () => void;
  prevPage?: () => void;
  info?: string;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
};

/**
 * Componente de paginação para navegar entre páginas.
 *
 * @param {Object} props - Propriedades do componente.
 * @param {() => void} [props.nextPage] - Função chamada ao clicar no botão "Próximo".
 * @param {() => void} [props.prevPage] - Função chamada ao clicar no botão "Anterior".
 * @param {string} [props.info='0 de 0'] - Texto informativo sobre a paginação (ex.: '1 de 5').
 * @param {boolean} [props.hasNextPage=false] - Define se o botão "Próximo" está habilitado.
 * @param {boolean} [props.hasPreviousPage=false] - Define se o botão "Anterior" está habilitado.
 *
 * @example
 * <Pagination
 *   info="1 de 10"
 *   hasNextPage={true}
 *   hasPreviousPage={false}
 *   nextPage={() => console.log('Próxima página')}
 *   prevPage={() => console.log('Página anterior')}
 * />
 */
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