import { Box, Flex } from '@mantine/core';
import { Logo } from '../components/Logo/Logo';

const VladTamplate = () => {
  return (
    <Box p="lg" bg="estimou.9">
      <Flex>
        <Logo color="white" />
      </Flex>
      <Flex />
    </Box>
  );
};

export default VladTamplate;
