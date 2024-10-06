import { create } from 'zustand';

export interface IService {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

interface IBuilderStore {
  company: {
    name: string;
    phone: string;
    email: string;
    doc: string;
    site: string;
    instagram: string;
    twitter: string;
    linkedin: string;
    behance: string;
  };
  customer: {
    name: string;
    phone: string;
    email: string;
    doc: string;
    site: string;
  };
  services: IService[];
  budgedInfo: {
    number: number;
    date?: Date;
    deadline?: Date;
    discount: number;
    increment: number;
    observations: string;
  };

  updateCompany: (company: Partial<IBuilderStore['company']>) => void;
  updateCustomer: (customer: Partial<IBuilderStore['customer']>) => void;
  updateBudgedInfo: (info: Partial<IBuilderStore['budgedInfo']>) => void;

  addService: (service: IService) => void;
  removeService: (index: number) => void;
  updateService: (index: number, service: Partial<IService>) => void;
  reorderServices: (from: number, to: number) => void;
}

export const useBuilderStore = create<IBuilderStore>((set) => ({
  company: {
    name: '',
    phone: '',
    email: '',
    doc: '',
    site: '',
    instagram: '',
    twitter: '',
    linkedin: '',
    behance: '',
  },

  customer: {
    name: '',
    phone: '',
    email: '',
    doc: '',
    site: '',
  },

  services: [],

  budgedInfo: {
    number: 0,
    date: undefined,
    deadline: undefined,
    discount: 0,
    increment: 0,
    observations: '',
  },

  updateCompany: (company) => set((state) => ({ company: { ...state.company, ...company } })),

  updateCustomer: (customer) => set((state) => ({ customer: { ...state.customer, ...customer } })),

  updateBudgedInfo: (info) => set((state) => ({ budgedInfo: { ...state.budgedInfo, ...info } })),

  addService: (service) => set((state) => ({ services: [...state.services, service] })),

  removeService: (index) =>
    set((state) => ({ services: state.services.filter((_, i) => i !== index) })),

  updateService: (index, service) =>
    set((state) => ({
      services: state.services.map((s, i) => {
        if (i === index) {
          return { ...s, ...service };
        }
        return s;
      }),
    })),

  reorderServices: (from, to) =>
    set((state) => {
      const services = [...state.services]; // Copia o array original
      const [movedService] = services.splice(from, 1); // Remove o item da posição original
      services.splice(to, 0, movedService); // Insere o item na nova posição

      return {
        services,
      };
    }),
}));
