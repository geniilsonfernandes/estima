import { create } from 'zustand';

export const templates = [
  'Chocolate',
  'Candy Cane',
  'Lollipop',
  'Gummy Bears',
  'Marshmallow',
  'Cupcake',
  'Brownie',
  'Donut',
  'Macaron',
  'Toffee',
] as const;

type TemplatesName =
  | 'Chocolate'
  | 'Candy Cane'
  | 'Lollipop'
  | 'Gummy Bears'
  | 'Marshmallow'
  | 'Cupcake'
  | 'Brownie'
  | 'Donut'
  | 'Macaron'
  | 'Toffee';

interface ITemplateStore {
  opened: boolean;
  openModal: (open: boolean) => void;

  template: TemplatesName;
  setTemplate: (template: TemplatesName) => void;
}

export const useTemplateStore = create<ITemplateStore>((set) => ({
  template: 'Chocolate',
  setTemplate: (template) => set({ template }),

  opened: false,
  openModal: (open) => set({ opened: open }),
}));
