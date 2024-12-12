import React, { useMemo } from 'react';
import { IconBell, IconChevronRight, IconMenu3 } from '@tabler/icons-react';
import { useLocation } from 'react-router';
import { ActionIcon, Badge, Flex, Group, Text, useMantineTheme } from '@mantine/core';

type AppHeaderProps = {
  onOpenMenu: () => void;
};

export const AppHeader = ({ onOpenMenu }: AppHeaderProps) => {
  const theme = useMantineTheme();

  const location = useLocation();

  const filterLocation = useMemo(() => {
    const pathname = location.pathname;
    const linkNames = pathname.split('/').filter((v) => v !== '/' && v !== '');

    return linkNames;
  }, [location]);

  return (
    <Group w="100%" justify="space-between" align="center">
      <Flex align="center" gap="sm" c="dark.5">
        <ActionIcon
          variant="transparent"
          size="xl"
          display={{ base: 'block', lg: 'none' }}
          onClick={onOpenMenu}
        >
          <IconMenu3 stroke={1.5} />
        </ActionIcon>
        <Group gap="xs">
          {filterLocation.map((item, index) => (
            <React.Fragment key={item}>
              {index !== 0 && (
                <IconChevronRight stroke={2} width={16} color={theme.colors.dark[1]} />
              )}
              {index === filterLocation.length - 1 ? (
                <Badge variant="outline" color="estimou" size="xs" key={item}>
                  {item}
                </Badge>
              ) : (
                <Text fw={400} size="xs" key={item} c="dimmed" tt="capitalize">
                  {item}
                </Text>
              )}
            </React.Fragment>
          ))}
        </Group>
      </Flex>

      <Group>
        <ActionIcon variant="transparent" size="xl">
          <IconBell stroke={1.5} />
        </ActionIcon>
      </Group>
    </Group>
  );
};
