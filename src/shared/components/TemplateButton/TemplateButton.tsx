import { Badge, Box, Flex, Image, Text } from '@mantine/core';
import placeholder from '@/shared/resource/tamplate-placeholder.jpg';
import classes from './TemplateButton.module.css';

type TemplateButtonProps = {
  label: string;
  onClick: () => void;
  active?: boolean;
};

export const TemplateButton = ({ label, onClick, active }: TemplateButtonProps) => {
  return (
    <Box onClick={onClick} aria-label={active ? label : undefined}>
      <Image src={placeholder} className={classes.image} alt="No way!" />
      <Flex align="center" justify="space-between" mt="xs" px="xs">
        <Text fw={500} size="sm">
          {label}
        </Text>
        <Badge color="gray" size="sm" radius="sm">
          Grátis
        </Badge>
      </Flex>
    </Box>
  );
};
