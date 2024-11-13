import { Box, Container, Stack, Text, Title } from '@mantine/core';
import noise from '@/shared/resource/noise.webp';
import { Lines } from '../Lines';
import { Menu } from '../Menu/Menu';
import { SubscribeInput } from '../SubscribeInput';
import classes from './Header.module.css';

const Noise = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${noise})`,
        backgroundSize: '30%',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 400,
        opacity: 0.05,
        pointerEvents: 'none',
      }}
    />
  );
};

export const Header = () => {
  return (
    <Container fluid bg="estimou.9" pos="relative">
      <Noise />
      <Box className={classes.image}>
        <Lines />
      </Box>
      <Container pos="relative" style={{ zIndex: 100 }}>
        <Menu />
        <Stack
          align="center"
          w="100%"
          ta="center"
          gap="md"
          justify="center"
          maw={600}
          mx="auto"
          h={600}
        >
          <Title c="white" fz="h2" lh="1.2" maw="90%">
            Diga adeus aos orçamentos via WhatsApp e PDFs! Envie um link personalizado e
            profissional para o seu cliente.
          </Title>
          <Text c="gray.2" maw="90%">
            Com nosso gerador de orçamentos inteligente, você transforma suas propostas em um link
            prático e profissional, pronto para fechar negócios com agilidade e eficiência.
          </Text>
          <SubscribeInput mt="sm" w="100%" />
        </Stack>
      </Container>
    </Container>
  );
};
