import { Box, Center } from '@mantine/core';
import { A4_Size } from '@/shared/constant/constants';

type TemplatePreviewProps = {
  label: string;
};
export const TemplatePreview = ({ label }: TemplatePreviewProps) => {
  return (
    <Center
      w={A4_Size.width / 1.2}
      h={A4_Size.height / 1.2}
      bg="white"
      style={{ borderRadius: '8px' }}
    >
      <Box>{label}</Box>
    </Center>
  );
};
