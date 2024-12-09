import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { Budget, budgets as mockBudgets } from '../models';

type useBudgetsProps = {
  filter?: {
    status?: string | null;
    client?: string | null;
    period?: [Date | null, Date | null];
  };
  pageSize?: number; // Itens por página
};

const useBudgets = ({ filter, pageSize = 10 }: useBudgetsProps = {}) => {
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [page, setPage] = useState<number>(1);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [paginationInfo, setPaginationInfo] = useState<string>(''); // Informação no formato "1-10 de 22"

  const hasNextPage = page * pageSize < totalItems;
  const hasPreviousPage = page > 1;

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  useEffect(() => {
    const fetchBudgets = async () => {
      setLoading(true);
      setError(null);

      try {
        // Filtra os orçamentos com base no filtro fornecido
        const filteredBudgets = mockBudgets.filter((budget) => {
          if (filter?.status) {
            return budget.status === filter.status;
          }

          if (filter?.client) {
            return budget.client.toLowerCase().includes(filter.client.toLowerCase());
          }

          // Filtro por período
          if (filter?.period) {
            const [startDate, endDate] = filter.period;

            // Certifica-se de que a data do orçamento está entre as datas fornecidas
            const budgetDate = dayjs(budget.date); // Supondo que budget.date é uma string ou Date
            if (startDate && !budgetDate.isAfter(dayjs(startDate).subtract(1, 'day'))) {
              return false; // Exclui se a data for antes do início
            }
            if (endDate && !budgetDate.isBefore(dayjs(endDate).add(1, 'day'))) {
              return false; // Exclui se a data for após o término
            }
          }

          return true;
        });

        // Define o total de itens antes da paginação
        setTotalItems(filteredBudgets.length);

        // Aplica a paginação
        const startIndex = (page - 1) * pageSize;
        const paginatedBudgets = filteredBudgets.slice(startIndex, startIndex + pageSize);

        // Define o total de páginas
        setTotalPages(Math.ceil(filteredBudgets.length / pageSize));

        // Atualiza o estado de orçamentos paginados
        setBudgets(paginatedBudgets);

        // Atualiza o estado com a informação de paginação
        const endIndex = Math.min(startIndex + pageSize, filteredBudgets.length);
        setPaginationInfo(`${startIndex + 1}-${endIndex} de ${filteredBudgets.length}`);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
      } finally {
        setLoading(false);
      }
    };

    fetchBudgets();
  }, [filter, page, pageSize]); // Atualiza quando filtros ou paginação mudam

  return {
    budgets,
    loading,
    error,
    totalItems,
    hasNextPage,
    hasPreviousPage,
    totalPages,
    paginationInfo, // Adiciona a informação de paginação ao retorno
    handleNextPage,
    handlePrevPage,
  };
};

export default useBudgets;