import { Card, Image, Text, useMantineTheme } from '@mantine/core';
import { A4_Size } from '@/shared/constant/constants';

type TemplateButtonProps = {
  label: string;
  onClick: () => void;
  active?: boolean;
};

export const TemplateButton = ({ label, onClick, active }: TemplateButtonProps) => {
  const { radius, colors } = useMantineTheme();
  return (
    <Card w={A4_Size.width / 2} p="xs" bg="transparent" onClick={onClick}>
      <Text c="white" mb="xs" ta="center">
        {label}
      </Text>
      <Image
        style={{
          borderRadius: radius.md,
          cursor: 'pointer',
          borderWidth: 4,
          borderStyle: 'solid',
          borderColor: active ? colors.estimou[5] : 'transparent',
          height: 300,
        }}
        src="https://cdn02.jotfor.ms/templates/screenshot/form-templates/responsive-layout-general-inquiry-contact-form.webp?w=310&v=2296733943&t=classic"
        alt="Lula"
      />
    </Card>
  );
};
