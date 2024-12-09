import { IconEdit, IconEye } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Divider,
  Drawer,
  Group,
  Progress,
  rem,
  SimpleGrid,
  Stack,
  Text,
} from '@mantine/core';
import { Client } from '../../views/Client.page';

type ClientDrawerProps = {
  opened: boolean;
  close: () => void;
  data?: Client;
};

const DisplayValue = ({ label, value = '-' }: { label: string; value?: string | number }) => {
  return (
    <div arial-label={label}>
      <Text size="xs" c="dark.9" fw={600} tt="capitalize" fz="xs">
        {label}
      </Text>
      <Text fw={500} size="xs" pt={4} c="dimmed">
        {value}
      </Text>
    </div>
  );
};

const invoices = [
  { label: 'fechados', count: '10', part: 59, color: '#47d6ab' },
  { label: 'abertos', count: '29', part: 35, color: '#03141a' },
  { label: 'vencidos', count: '1', part: 6, color: '#ff0000' },
];

export const ClientDrawer = ({ opened, close, data }: ClientDrawerProps) => {
  const navigate = useNavigate();

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
    <Drawer.Root opened={opened} onClose={close} offset={8} radius="md">
      <Drawer.Overlay />
      <Drawer.Content>
        <Drawer.Header>
          <Box>
            <Text size="sm" fw={500}>
              {data?.name}
            </Text>

            <Text size="xs" c="dimmed">
              {data?.cpfOrCnpj}
            </Text>
          </Box>
          <Drawer.CloseButton />
        </Drawer.Header>
        <Drawer.Body>
          <Button.Group w={{ base: '100%', md: '400px' }} my="md">
            <Button
              size="xs"
              variant="light"
              fullWidth
              leftSection={<IconEye style={{ width: rem(16) }} stroke={1.5} />}
            >
              Ver orçamentos
            </Button>

            <Button
              size="xs"
              variant="outline"
              fullWidth
              onClick={() => navigate(`/clients/edit/${data?.id}`)}
              leftSection={<IconEdit style={{ width: rem(16) }} stroke={1.5} />}
            >
              Editar
            </Button>
          </Button.Group>
          <Divider label="Orçamentos" labelPosition="left" />
          <Progress.Root size={34} my="md">
            {segments}
          </Progress.Root>
          <SimpleGrid cols={{ base: 1, xs: 3 }}>{descriptions}</SimpleGrid>

          <Stack gap="xs">
            <Divider my="xs" label="Informações da básicas" labelPosition="left" />
            <SimpleGrid cols={{ base: 1, xs: 2 }}>
              <DisplayValue label="Nome/Responsável" value={data?.name} />
              <DisplayValue label="Email" value={data?.email} />
              <DisplayValue label="Telefone" value={data?.phone} />
              <DisplayValue label="Empresa (Razão Social)" value={data?.company} />
            </SimpleGrid>

            <DisplayValue label="CNPJ/CPF" value={data?.cpfOrCnpj} />
          </Stack>
          <Divider my="xs" label="Informações da empresa" labelPosition="left" />
          <Stack gap="xs">
            <SimpleGrid cols={{ base: 1, xs: 2 }}>
              <DisplayValue label="CEP" value={data?.address?.cep} />
              <DisplayValue label="Site" value={data?.site} />
              <DisplayValue label="Endereço" value={data?.address?.neighborhood} />
              <DisplayValue
                label="Cidade"
                value={`${data?.address?.city} - ${data?.address?.state}`}
              />
            </SimpleGrid>
          </Stack>
        </Drawer.Body>
      </Drawer.Content>
    </Drawer.Root>
  );
};
