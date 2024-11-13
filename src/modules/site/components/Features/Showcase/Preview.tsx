import { useState } from 'react';
import { IconBrandFacebook, IconBrandInstagram } from '@tabler/icons-react';
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Group,
  Stack,
  Text,
  ThemeIcon,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { Logo } from '@/shared/components/Logo/Logo';
import classes from './Showcase.module.css';

const orcamentos = [
  {
    id: '001',
    titulo: 'Desenvolvimento de E-commerce',
    descricao: 'Plataforma de e-commerce para uma loja de roupas em 2023',
    valor: 'R$ 15.000',
  },
  {
    id: '002',
    titulo: 'App Mobile',
    descricao: 'Aplicativo mobile para controle de estoque, lançado em 2021',
    valor: 'R$ 25.000',
  },
  {
    id: '003',
    titulo: 'Re-design de Site Corporativo',
    descricao: 'Atualização de layout e SEO.',
    valor: 'R$ 12.000',
  },
];

export const Preview = () => {
  const [color, setColor] = useState('estimou');
  const theme = useMantineTheme();
  return (
    <Box
      w={500}
      style={{
        borderRadius: '8px',
        position: 'relative',
      }}
    >
      <Box
        style={{
          position: 'absolute',
          left: -48,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 400,
          background: 'white',
          borderRadius: '8px',
        }}
        className={classes.colorPicker}
        p="sm"
      >
        <Flex gap={8} direction="column">
          <Button color="estimou" size="xs" w={48} h={48} onClick={() => setColor('estimou')} />
          <Button color="gray" size="xs" w={48} h={48} onClick={() => setColor('gray')} />
          <Button color="red" size="xs" w={48} h={48} onClick={() => setColor('red')} />
          <Button color="cyan" size="xs" w={48} h={48} onClick={() => setColor('cyan')} />
          <Button color="blue" size="xs" w={48} h={48} onClick={() => setColor('blue')} />
        </Flex>
      </Box>
      <Flex p="xl" bg={theme.colors[color][9]} c="white" justify="space-between">
        <Box>
          <Text
            fz="xs"
            bg={theme.colors[color][8]}
            c="white"
            p="4"
            mb={8}
            style={{
              display: 'inline-block',
            }}
          >
            Orçamento para
          </Text>
          <Title fz="xl">Empresa</Title>
          <Text fz="xs" c="gray.5" mt={8}>
            empresa@email.com
          </Text>
          <Text fz="xs" c="gray.5">
            www.empresa.com
          </Text>
          <Text fz="xs" c="gray.5">
            22 2 22222222
          </Text>
          <Divider my="sm" />
          <Text fz="xs" c="white">
            Orçamento: 1FDSK
          </Text>
          <Text fz="xs" c="white">
            22 de julho
          </Text>
        </Box>
        <Flex direction="column" gap={8} justify="space-between" align="flex-end">
          <Box>
            <Logo />
          </Box>
          <Group ml="auto" gap={8}>
            <ThemeIcon variant="light" c={theme.colors[color][1]} size="sm">
              <IconBrandInstagram />
            </ThemeIcon>
            <ThemeIcon variant="light" c={theme.colors[color][1]} size="sm">
              <IconBrandFacebook />
            </ThemeIcon>
          </Group>
        </Flex>
      </Flex>
      <Grid w="100%" mx="auto" gutter={10} px="xl" mt="-16px">
        <Grid.Col span={12}>
          <Flex
            justify="space-between"
            px="lg"
            py="xs"
            w="100%"
            bg={theme.colors[color][7]}
            c="estimou.2"
            gap="lg"
          >
            <Text fz="xs">ID</Text>
            <Text fz="xs" flex={1}>
              Descrição
            </Text>
            <Text fz="xs">Valor</Text>
          </Flex>
        </Grid.Col>
        {orcamentos.map((orcamento) => (
          <Grid.Col span={12} key={orcamento.id}>
            <Flex justify="space-between" gap="lg" px="lg" py="xs" w="100%">
              <Text fz="xs">{orcamento.id}</Text>
              <Box flex={1}>
                <Text fz="xs" c="gray.9">
                  {orcamento.titulo}
                </Text>
                <Text fz="10px" c="gray.6">
                  {orcamento.descricao}
                </Text>
              </Box>
              <Text fz="xs">{orcamento.valor}</Text>
            </Flex>
          </Grid.Col>
        ))}
      </Grid>
      <Divider mt="md" size="xs" />
      <Flex px="xl" py="xl" justify="space-between" gap="xl">
        <Box w={200}>
          <Title fz={10}>Termos e Condições</Title>
          <Text mt={8} fz={8} c="dimmed">
            Este orçamento é válido por 30 dias a partir da data de emissão e poderá sofrer ajustes
            em caso de alterações no escopo do projeto.
          </Text>

          <Title fz={10} mt={16}>
            Estimou
          </Title>
          <Text mt={8} fz={8} c="dimmed">
            Rio de Janeiro, 22 de julho de 2023
          </Text>
        </Box>
        <Stack gap="xs">
          <Flex align="center" justify="space-between" gap="xl">
            <Title fz={10}>SubTotal:</Title>
            <Text fz={8} c="dimmed">
              R$ 50.000
            </Text>
          </Flex>
          <Flex align="center" justify="space-between" gap="xl">
            <Title fz={10}>Discontos:</Title>
            <Text fz={8} c="dimmed">
              R$ 0
            </Text>
          </Flex>
          <Flex align="center" justify="space-between" gap="xl">
            <Title fz={10}>SubTotal:</Title>
            <Text fz={8} c="dimmed">
              R$ 50.000
            </Text>
          </Flex>
          <Divider my="xs" size="xs" />
          <Flex align="center" justify="space-between" gap="xl">
            <Title fz="h5">Total:</Title>
            <Text fz="h5" fw={600} c="estimou.9">
              R$ 50.000
            </Text>
          </Flex>
        </Stack>
      </Flex>
    </Box>
  );
};
