import {
  IconBuilding,
  IconChartBar,
  IconCheck,
  IconListDetails,
  IconSettings,
  IconTools,
  IconUsers,
} from '@tabler/icons-react';
import { NavLink } from 'react-router';
import { ActionIcon, Box, Center, Flex, Group, rem, RingProgress, Title } from '@mantine/core';
import { Logo } from '@/shared/components/Logo';
import { useAuth } from '@/shared/hooks/useAuth';
import { UserMenu } from '../UserButton';
import classes from './NavbarSimple.module.css';

const data = [
  { link: 'budgets', label: 'Orçamentos', icon: IconListDetails },
  { link: 'clients', label: 'Clientes', icon: IconUsers },
  { link: 'work', label: 'Serviços', icon: IconTools },
  { link: 'companie', label: 'Minha Empresa', icon: IconBuilding },
  { link: 'statistics', label: 'Estatísticas', icon: IconChartBar },
  { link: 'settings', label: 'Configurações', icon: IconSettings },
];

export function Navbar() {
  const { session } = useAuth();
  const links = data.map((item) => (
    <NavLink
      className={({ isActive }) => `${classes.link} ${isActive ? classes.active : ''}`}
      to={item.link}
      key={item.label}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </NavLink>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          <Logo />
        </Group>
        {links}
      </div>

      <Flex p="sm" bg="estimou.9" align="center" justify="space-between">
        <RingProgress
          size={40}
          thickness={3}
          sections={[{ value: 40, color: 'teal' }]}
          rootColor="white"
          label={
            <Center>
              <ActionIcon color="teal" variant="light" radius="xl" size="xs">
                <IconCheck style={{ width: rem(16), height: rem(16) }} />
              </ActionIcon>
            </Center>
          }
        />
        <Title order={5} fz="xs" c="white">
          Perfil de sucesso
        </Title>
        <Title order={5} fz="sm" c="dimmed">
          40%
        </Title>
      </Flex>
      <Box p="xs">
        <UserMenu user={session?.user} />
      </Box>
    </nav>
  );
}
