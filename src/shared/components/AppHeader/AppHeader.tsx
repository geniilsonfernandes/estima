import { IconBell, IconMenu3 } from '@tabler/icons-react';
import { ActionIcon, Box, Flex, Group, Title } from '@mantine/core';
import { UserButton } from '../UserButton/UserButton';

type AppHeaderProps = {
  onOpenMenu: () => void;
  title: string;
};

export const AppHeader = ({ onOpenMenu, title }: AppHeaderProps) => {
  return (
    <Group w="100%" justify="space-between" align="center">
      <Box>
        <Flex align="center" gap="sm" c="dark.5">
          <ActionIcon
            variant="transparent"
            size="xl"
            display={{ base: 'block', lg: 'none' }}
            onClick={onOpenMenu}
          >
            <IconMenu3 stroke={1.5} />
          </ActionIcon>

          <Title tt="capitalize" fz={{ base: 'xl', sm: '2xl' }} c="dark.5" fw={600}>
            {title}
          </Title>
        </Flex>
      </Box>
      <Group>
        <ActionIcon variant="transparent" size="xl">
          <IconBell stroke={1.5} />
        </ActionIcon>
        <UserButton />
      </Group>
    </Group>
  );
};
