import { useEffect } from 'react';
import { Outlet, useNavigation } from 'react-router';
import { Box, Drawer, Flex, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { NavigationProgress, nprogress } from '@mantine/nprogress';
import { AppHeader } from '../AppHeader';
import { Navbar } from '../Navbar/Navbar';
import { TapBar } from '../TapBar';

export const AppWrapper = () => {
  const { state } = useNavigation();
  const [opened, { open, close }] = useDisclosure(false);
  const sidebarWidth = 240;

  useEffect(() => {
    if (state === 'loading') {
      nprogress.start();
    }

    if (state === 'idle') {
      nprogress.complete();
    }
  }, [state]);

  return (
    <Flex align="stretch" bg="gray.0" pos="relative">
      <NavigationProgress />
      {/* Sidebar */}
      <Box
        display={{ base: 'none', lg: 'block' }}
        left={0}
        bg="estimou.9"
        w={sidebarWidth}
        h="100vh"
        style={{
          zIndex: 100,
          position: 'fixed',
          top: 0,
          left: 0,
        }}
      >
        <Navbar />
      </Box>

      {/* Main Content */}
      <Stack gap="md" flex={1} p="md" mih="100vh" ml={{ lg: sidebarWidth }}>
        <AppHeader onOpenMenu={open} />
        <Box flex="1" pt="md" pb={{ base: 70, md: 0 }} opacity={state === 'loading' ? 0.5 : 1}>
          <Outlet />
        </Box>
      </Stack>

      {/* Mobile Navigation */}
      <Flex
        pos="fixed"
        justify="center"
        w="100%"
        display={{ base: 'flex', lg: 'none' }}
        bottom={0}
        left={0}
        right={0}
        p="md"
      >
        <TapBar />
      </Flex>

      {/* Menu Drawer mobile */}

      <Drawer
        opened={opened}
        onClose={close}
        position="left"
        offset={8}
        radius="md"
        withCloseButton={false}
        styles={{ body: { padding: 0, height: '100%' } }}
      >
        <Box bg="red" h="100%">
          <Drawer.CloseButton bg="estimou.9" pos="fixed" c="white" top="16px" right="16px" />
          <Navbar />
        </Box>
      </Drawer>
    </Flex>
  );
};
