import { Box, Flex, rem, Text, ThemeIcon, Title } from '@mantine/core';
import { ExtendedCustomColors } from '@/types/types';

type FeatureProps = {
  icon?: React.ReactNode;
  title: string;
  description: string;
  colorTitle?: ExtendedCustomColors;
  colorDescription?: ExtendedCustomColors;
  titleWidth?: number;
  fullWidth?: boolean;
};

export const FeatureDisplay = ({
  icon,
  title,
  description,
  colorTitle = 'white',
  titleWidth,
  colorDescription = 'estimou.3',
}: FeatureProps) => (
  <Box mb="lg">
    <Flex gap="sm">
      {icon && (
        <ThemeIcon color="estimou.8" size={32} radius="sm">
          {icon}
        </ThemeIcon>
      )}
      <Title fz="sm" c={colorTitle} {...{ style: { width: rem(titleWidth) } }}>
        {title}
      </Title>
    </Flex>
    <Text c={colorDescription} fz="sm" mt="sm">
      {description}
    </Text>
  </Box>
);
