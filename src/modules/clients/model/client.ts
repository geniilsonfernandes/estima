import { Database } from '../../../../database.types';

export type Client = {
  budgets?: [];
} & Database['public']['Tables']['clients']['Row'];
