import { Box, Drawer, Flex, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { AppHeader } from '../AppHeader';
import { Navbar } from '../Navbar/Navbar';
import { TapBar } from '../TapBar/TapBar';

type AppWrapperProps = {
  children: React.ReactNode;
  pageTitle?: string;
};

const AppWrapper: React.FC<AppWrapperProps> = ({ children, pageTitle }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const sidebarWidth = 300;

  return (
    <Flex align="stretch" bg="gray.0" pos="relative">
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
        <AppHeader onOpenMenu={open} title={pageTitle || 'Estimou'} />
        <Box flex="1" pb={{ base: 70, md: 0 }}>
          {children}
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

export default AppWrapper;
