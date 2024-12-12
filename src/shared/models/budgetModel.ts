export type status = 'draft' | 'pending' | 'active' | 'completed' | 'cancelled';

export type Budget = {
  id?: string;
  status?: status;
  client?: string;
  date?: string;
  total?: number;
  dueDate?: string; // 11 dias
};
