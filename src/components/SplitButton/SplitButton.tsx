import { IconBookmark, IconCalendar, IconChevronDown, IconTrash } from '@tabler/icons-react';
import { ActionIcon, Button, Group, Menu, rem, useMantineTheme } from '@mantine/core';

export function SplitButton() {
  const theme = useMantineTheme();

  return (
    <Group wrap="nowrap" gap={0}>
      <Button variant="outline" color="white">
        Send
      </Button>
      <Menu transitionProps={{ transition: 'pop' }} position="bottom-end" withinPortal>
        <Menu.Target>
          <ActionIcon variant="outline" color="white" size={36}>
            <IconChevronDown style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item
            leftSection={
              <IconCalendar
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
                color={theme.colors.blue[5]}
              />
            }
          >
            Schedule for later
          </Menu.Item>
          <Menu.Item
            leftSection={
              <IconBookmark
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
                color={theme.colors.blue[5]}
              />
            }
          >
            Save draft
          </Menu.Item>
          <Menu.Item
            leftSection={
              <IconTrash
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
                color={theme.colors.blue[5]}
              />
            }
          >
            Delete
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
}
