import { keepPreviousData, queryOptions, useQuery } from '@tanstack/react-query';
import { getClient, getClients, GetClientsQuery } from '../controllers/ClientController';

export type ListClientsQuery = GetClientsQuery;

export const clientKeys = {
  all: () => ['clients'],
  list: () => [...clientKeys.all(), 'list'],
  filter: (q: ListClientsQuery = {}, page: number = 1) => [...clientKeys.all(), 'filter', q, page],
  details: () => [...clientKeys.all(), 'detail'],
  detail: (id: string) => [...clientKeys.details(), id],
};

export const ClientListQuery = (q?: ListClientsQuery, page = 1) =>
  queryOptions({
    queryKey: clientKeys.filter(q, page),
    queryFn: () => getClients(q, page),
    placeholderData: keepPreviousData,
  });

export const clientDetailsQuery = (id: string) =>
  queryOptions({
    queryKey: clientKeys.detail(id),
    queryFn: () => getClient(id),
    enabled: Boolean(id),
  });

export const useListClient = (filters: ListClientsQuery, page = 1) => {
  return useQuery(ClientListQuery(filters, page));
};

export const useClientDetail = (id: string) => {
  return useQuery(clientDetailsQuery(id));
};
