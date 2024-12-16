// import type { Client, CreateClientDTO, UpdateClientDTO } from '../models/ClientModel';
import { supabase } from '@/shared/services/supabase';
import { Database } from '../../../../database.types';

export type CreateClientDTO = Omit<Database['public']['Tables']['clients']['Insert'], 'id'>;
export type UpdateClientDTO = Omit<Database['public']['Tables']['clients']['Update'], 'id'>;
export type GetClientsQuery = {
  name?: string;
  email?: string;
  phone?: string;
};

const TABLE_NAME = 'clients';

export class CustomError extends Error {
  public status: number;
  public statusText: string;
  public details: any;

  constructor(message: string, status: number, statusText: string, details?: any) {
    super(message);
    this.name = 'CustomError';
    this.status = status;
    this.statusText = statusText;
    this.details = details;

    // Capture the stack trace (useful for debugging)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }
  }
}

export async function updateClient(id: string, clientData: UpdateClientDTO) {
  const { data, error, status, statusText } = await supabase
    .from('clients')
    .update(clientData)
    .eq('id', id)
    .single();

  if (error) {
    throw new CustomError(error.message, status, statusText, error.details);
  }

  return data;
}

export async function createClient(clientData: CreateClientDTO) {
  const { data, error, status, statusText } = await supabase.from(TABLE_NAME).insert([clientData]);

  if (error) {
    throw new CustomError(error.message, status, statusText, error.details);
  }

  return data;
}

export async function getClient(id: string) {
  if (!id) {
    throw new Error('ID do cliente obrigatório');
  }
  const { data, error, status, statusText } = await supabase
    .from(TABLE_NAME)
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    throw new CustomError(error.message, status, statusText, error.details);
  }

  return data;
}

export async function getClients(query?: GetClientsQuery, page: number = 1, pageSize: number = 10) {
  const start = (page - 1) * pageSize;
  const end = start + pageSize - 1;

  // Base query
  const builder = supabase
    .from(TABLE_NAME)
    .select('*', { count: 'exact' }) // 'exact' retorna o total de registros na tabela
    .order('name', { ascending: true });

  // Filtros opcionais
  if (query?.name) {
    builder.ilike('name', `%${query.name}%`);
  }

  if (query?.email) {
    builder.ilike('email', `%${query.email}%`);
  }

  if (query?.phone) {
    builder.ilike('phone', `%${query.phone}%`);
  }

  builder.range(start, end);

  const { data, error, count } = await builder;

  if (error) {
    throw error;
  }

  return {
    data,
    total: count || 0,
    page,
    pageSize,
    hasNextPage: page * pageSize < (count || 0),
    hasPreviousPage: page > 1,
    totalPages: Math.ceil((count || 0) / pageSize),
  };
}

export async function deleteClient(id?: string) {
  if (!id) {
    throw new Error('ID do cliente obrigatório');
  }
  const { error, status, statusText } = await supabase.from(TABLE_NAME).delete().eq('id', id);

  if (error) {
    throw new CustomError(error.message, status, statusText, error.details);
  }
}
