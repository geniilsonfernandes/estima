import { Box, Divider, Group, Progress, rem, Text } from '@mantine/core';

export const BudgetsOverview = () => {
  const invoices = [
    { label: 'fechados', count: '10', part: 59, color: '#47d6ab' },
    { label: 'abertos', count: '29', part: 35, color: '#03141a' },
    { label: 'vencidos', count: '1', part: 6, color: '#ff0000' },
  ];

  const segments = invoices.map((segment) => (
    <Progress.Section value={segment.part} color={segment.color} key={segment.color}>
      {segment.part > 10 && (
        <Progress.Label styles={{ label: { fontSize: rem(12) } }}>{segment.part}%</Progress.Label>
      )}
    </Progress.Section>
  ));

  const descriptions = invoices.map((stat) => (
    <Box key={stat.label} style={{ borderBottomColor: stat.color }}>
      <Text tt="uppercase" fz="xs" c="dimmed" fw={600}>
        {stat.label}
      </Text>

      <Group justify="space-between" align="center" gap={0}>
        <Text fw={700} fz="md">
          {stat.count}
        </Text>
        <Text c={stat.color} fw={700} fz="xs">
          {stat.part}%
        </Text>
      </Group>
    </Box>
  ));
  return (
    <>
      <Divider label="Orçamentos" labelPosition="left" />
      <Progress.Root size={34} my="md">
        {segments}
      </Progress.Root>
      <Group justify="space-between">{descriptions}</Group>
    </>
  );
};
