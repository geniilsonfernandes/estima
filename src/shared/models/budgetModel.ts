export type status = 'draft' | 'pending' | 'active' | 'completed' | 'cancelled';

export type Budget = {
  id: string;
  status: status;
  client: string;
  date: string;
  value: number;
  validity: string; // 11 dias
};
