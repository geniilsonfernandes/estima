import {
  IconCheck,
  IconDeviceAnalytics,
  IconGitCommit,
  IconPalette,
  IconPlugConnected,
} from '@tabler/icons-react';
import { Card, Grid, List, rem, Text, ThemeIcon, Title } from '@mantine/core';
import { FeatureDisplay } from './FeatureDisplay';

export const Highlights = () => {
  return (
    <Grid mb={18} gutter="xl">
      <Grid.Col
        span={{
          xs: 12,
          sm: 4,
          md: 4,
          lg: 4,
        }}
      >
        <Card bg="estimou.9" p="xl" h="100%">
          <Text c="estimou.3" fz="sm">
            Principais Benefícios
          </Text>
          <Title order={2} c="white" fz="h3">
            Por que escolher nosso gerador de orçamentos?
          </Title>
          <List
            mt="auto"
            c="white"
            fz="sm"
            icon={
              <ThemeIcon color="estimou.8" size={22} radius="xl">
                <IconCheck style={{ width: rem(16), height: rem(16) }} />
              </ThemeIcon>
            }
          >
            <List.Item mt={6}>Crie</List.Item>
            <List.Item mt={6}>Personalize</List.Item>
            <List.Item mt={6}>Envie e Monitore</List.Item>
          </List>
        </Card>
      </Grid.Col>
      <Grid.Col
        span={{
          xs: 12,
          sm: 8,
          md: 8,
          lg: 8,
        }}
      >
        <Card bg="estimou.9" p="xl">
          <Grid>
            <Grid.Col
              span={{
                xs: 12,
                sm: 6,
                md: 6,
                lg: 6,
              }}
            >
              <FeatureDisplay
                icon={<IconGitCommit />}
                titleWidth={100}
                title="Automação de Propostas"
                description="Gerencie e envie orçamentos com apenas um clique, sem perder a precisão."
              />
            </Grid.Col>
            <Grid.Col
              span={{
                xs: 12,
                sm: 6,
                md: 6,
                lg: 6,
              }}
            >
              <FeatureDisplay
                icon={<IconPalette />}
                titleWidth={100}
                title="Personalização Instantânea"
                description="Adapte o orçamento de acordo com as necessidades do cliente em segundos."
              />
            </Grid.Col>
            <Grid.Col
              span={{
                xs: 12,
                sm: 6,
                md: 6,
                lg: 6,
              }}
            >
              <FeatureDisplay
                icon={<IconPlugConnected />}
                titleWidth={100}
                title="Integração com Seu CRM"
                description="Sincronize dados e tenha uma visão completa dos negócios em um só lugar."
              />
            </Grid.Col>
            <Grid.Col
              span={{
                xs: 12,
                sm: 6,
                md: 6,
                lg: 6,
              }}
            >
              <FeatureDisplay
                icon={<IconDeviceAnalytics />}
                titleWidth={100}
                title="Análise e Estatísticas"
                description="Receba insights em tempo real sobre o desempenho dos orçamentos enviados."
              />
            </Grid.Col>
          </Grid>
        </Card>
      </Grid.Col>
    </Grid>
  );
};
