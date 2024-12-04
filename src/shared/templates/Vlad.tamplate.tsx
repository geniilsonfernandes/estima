import { Box, Flex } from '@mantine/core';
import { Logo } from '@/shared/components/Logo';

type TemplateProps = {
  title: string;
};

const VladTamplate = ({ title }: TemplateProps) => {
  return (
    <Box p="lg" bg="estimou.9">
      <Flex>
        {title}
        <Logo color="white" />
      </Flex>
      <Flex />
    </Box>
  );
};

export default VladTamplate;
