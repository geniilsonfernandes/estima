import {
  IconBuilding,
  IconChartBar,
  IconListDetails,
  IconLogout,
  IconSettings,
  IconSwitchHorizontal,
  IconTools,
  IconUsers,
} from '@tabler/icons-react';
import { NavLink } from 'react-router-dom';
import { Group } from '@mantine/core';
import { Logo } from '@/shared/components/Logo';
import classes from './NavbarSimple.module.css';

const data = [
  { link: '/invoices', label: 'Orçamentos', icon: IconListDetails },
  { link: '/clients', label: 'Clientes', icon: IconUsers },
  { link: '/work', label: 'Serviços', icon: IconTools },
  { link: '/companie', label: 'Minha Empresa', icon: IconBuilding },
  { link: '/statistics', label: 'Estatísticas', icon: IconChartBar },
  { link: '/settings', label: 'Configurações', icon: IconSettings },
];

export function Navbar() {
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

      <div className={classes.footer}>
        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Help</span>
        </a>

        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
}
