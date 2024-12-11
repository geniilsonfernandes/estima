import { IconEdit, IconEye } from '@tabler/icons-react';
import { useNavigate } from 'react-router';
import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerProps,
  rem,
  SimpleGrid,
  Stack,
  Text,
} from '@mantine/core';
import { Client } from '../../views/Client.page';

type ClientDrawerProps = {
  data?: Client;
} & DrawerProps;

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

export const ClientDrawer = ({ data, ...props }: ClientDrawerProps) => {
  const navigate = useNavigate();

  return (
    <Drawer.Root offset={8} radius="md" {...props}>
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
              onClick={() => navigate(`edit/${data?.id}`)}
              leftSection={<IconEdit style={{ width: rem(16) }} stroke={1.5} />}
            >
              Editar
            </Button>
          </Button.Group>
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
