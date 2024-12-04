import {
  IconBuilding,
  IconListDetails,
  IconLogout,
  IconSettings,
  IconUsers,
} from '@tabler/icons-react';
import { NavLink } from 'react-router-dom';
import { ActionIcon, ActionIconVariant, Group, Paper } from '@mantine/core';

const TapBarOptions = [
  { link: '/213', label: 'Clientes', icon: IconUsers, variant: 'transparent' },
  { link: '/23131', label: 'Minha Empresa', icon: IconBuilding, variant: 'transparent' },
  { link: '/invoices', label: 'Orçamentos', icon: IconListDetails, variant: 'filled' },
  { link: '/2313', label: 'Configurações', icon: IconSettings, variant: 'transparent' },
] as {
  link: string;
  label: string;
  icon: any;
  color?: string;
  variant?: ActionIconVariant;
}[];

export function TapBar() {
  return (
    <Paper shadow="xs" radius="md" p="xs" bottom={0}>
      <Group justify="space-between">
        {TapBarOptions.map((item) => (
          <NavLink to={item.link}>
            {({ isActive }) => (
              <ActionIcon
                key={item.label}
                size="lg"
                c={item.color}
                variant={isActive ? 'filled' : 'transparent'}
              >
                <item.icon stroke={1.5} />
              </ActionIcon>
            )}
          </NavLink>
        ))}
        <ActionIcon size="lg" c="red" variant="transparent">
          <IconLogout stroke={1.5} />
        </ActionIcon>
      </Group>
    </Paper>
  );
}
