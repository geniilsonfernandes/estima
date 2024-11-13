import { IconClock2, IconClock12, IconDeviceAnalytics } from '@tabler/icons-react';
import { Card, Flex, Grid, Text, ThemeIcon, Title } from '@mantine/core';
import { FeatureDisplay } from './FeatureDisplay';

export const FeatureApi = () => {
  return (
    <Grid gutter="xl" mb={96}>
      <Grid.Col
        span={{
          xs: 12,
          sm: 4,
          md: 4,
          lg: 4,
        }}
      >
        <Flex direction="column" p="xl" h="100%" gap={24}>
          <ThemeIcon color="estimou.8" size={48} radius="sm">
            <IconDeviceAnalytics />
          </ThemeIcon>
          <Flex direction="column" gap={8}>
            <Text c="estimou.3" fz="sm">
              API Pública
            </Text>
            <Title order={2} c="estimou.9" fz="h3">
              Integração Inteligente
            </Title>
            <Text c="estimou.9" fz="sm">
              Expanda as funcionalidades do seu sistema com nossa API.
            </Text>
          </Flex>
          <Text c="gray.6" fz="sm">
            Facilite a geração e o envio de orçamentos, integrando nossa tecnologia em seus próprios
            aplicativos e fluxos de trabalho.
          </Text>
        </Flex>
      </Grid.Col>
      <Grid.Col
        span={{
          xs: 12,
          sm: 8,
          md: 8,
          lg: 8,
        }}
      >
        <Card p="xl" bg="estimou.9">
          <Grid>
            <Grid.Col span={12}>
              <FeatureDisplay
                icon={<IconDeviceAnalytics />}
                titleWidth={150}
                title="Integração Rápida e Simples"
                description="Conecte nossa API ao seu sistema em minutos com nossa documentação clara e endpoints intuitivos."
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <FeatureDisplay
                icon={<IconClock12 />}
                titleWidth={150}
                title="Geração Automática de Orçamentos"
                description="Use nossa API para criar e enviar orçamentos de forma programática, automatizando processos e economizando tempo."
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <FeatureDisplay
                icon={<IconClock2 />}
                titleWidth={150}
                title="Acompanhamento em Tempo Real"
                description="Receba atualizações instantâneas sobre o status dos orçamentos diretamente na sua plataforma."
              />
            </Grid.Col>
          </Grid>
        </Card>
      </Grid.Col>
    </Grid>
  );
};
