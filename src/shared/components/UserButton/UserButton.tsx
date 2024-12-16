import { IconLogout, IconPlayerPause, IconSettings } from '@tabler/icons-react';
import { Avatar, Group, Menu, Text, UnstyledButton } from '@mantine/core';
import { signOut } from '@/modules/authentication/controllers/authController';
import { User } from '@/modules/authentication/models';
import classes from './UserButton.module.css';

type UserMenuProps = {
  user?: User;
};

export const UserMenu = ({ user }: UserMenuProps) => {
  const shortenString = (text?: string) => {
    if (!text) {
      return '';
    }
    if (text.length > 10) {
      return `${text.substring(0, 10)}...`;
    }
    return text;
  };

  return (
    <Menu
      withArrow
      width={300}
      position="right"
      transitionProps={{ transition: 'pop' }}
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton className={classes.user}>
          <Avatar radius="sm" name={user?.email} />
          <div>
            <Text fw={500} fz="sm">
              {shortenString(user?.email)}
            </Text>
            <Text size="xs" c="dimmed">
              {shortenString(user?.email)}
            </Text>
          </div>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Group p="xs" gap="xs">
          <Avatar radius="sm" name={user?.email} />
          <div>
            <Text fw={500} fz="sm">
              {shortenString(user?.email)}
            </Text>
            <Text size="xs" c="dimmed">
              {shortenString(user?.email)}
            </Text>
          </div>
        </Group>

        <Menu.Divider />

        <Menu.Item leftSection={<IconSettings size={16} stroke={1.5} />}>Conta</Menu.Item>
        <Menu.Item onClick={() => signOut()} leftSection={<IconLogout size={16} stroke={1.5} />}>
          Sair
        </Menu.Item>

        <Menu.Divider />

        <Menu.Item leftSection={<IconPlayerPause size={16} stroke={1.5} />}>Atividades</Menu.Item>
        <Menu.Item leftSection={<IconPlayerPause size={16} stroke={1.5} />}>
          Central de ajuda
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
