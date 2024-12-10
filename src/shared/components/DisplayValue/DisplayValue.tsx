import { Text } from '@mantine/core';


type DisplayValueProps = {
  title: string;
  value: string | number | null | React.ReactNode;
};

export const DisplayValue = ({ title, value }: DisplayValueProps) => {
  return (
    <div arial-label={title}>
      <Text size="xs" fw={600} tt="capitalize" fz="xs">
        {title}
      </Text>
      <Text fw={500} size="xs" pt={4} c="dimmed">
        {value}
      </Text>
    </div>
  );
};