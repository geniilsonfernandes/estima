import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { InvoiceCard, InvoiceCardProps } from './InvoiceCard';

const mock: InvoiceCardProps = {
  onDetails: () => {
    fn();
  },
  onView: () => {
    fn();
  },
  data: {
    id: '1',
    status: 'draft',
    client: 'Client A',
    date: '2024-12-01',
    total: 1000,
    dueDate: '11 dias',
  },
};

const meta: Meta<typeof InvoiceCard> = {
  title: 'InvoiceCard',
  component: InvoiceCard,
  argTypes: {},

  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: mock,
};
export const Compact: Story = {
  args: {
    ...mock,
    variant: 'compact',
  },
};
