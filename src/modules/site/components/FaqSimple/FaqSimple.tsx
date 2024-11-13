import { Accordion, Container, Text, Title } from '@mantine/core';
import classes from './FaqSimple.module.css';

export function FaqSimple() {
  return (
    <Container size="sm" className={classes.wrapper} my="96">
      <Text c="estimou.3" fz="sm" ta="center">
        FAQ
      </Text>
      <Title ta="center" order={2} c="estimou.9" fz="h3" className={classes.title}>
        Perguntas Frequentes
      </Title>
      <Accordion variant="separated">
        <Accordion.Item className={classes.item} value="reset-password">
          <Accordion.Control>Posso personalizar o layout do orçamento?</Accordion.Control>
          <Accordion.Panel>
            Sim, nossa ferramenta oferece templates personalizáveis para você ajustar conforme o
            estilo da sua marca.”
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="another-account">
          <Accordion.Control>
            É possível acompanhar quando o cliente visualiza o orçamento?
          </Accordion.Control>
          <Accordion.Panel>
            Sim, você será notificado assim que o cliente abrir o orçamento enviado.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="newsletter">
          <Accordion.Control>
            O gerador de orçamentos é seguro? Como são protegidos os dados dos clientes?
          </Accordion.Control>
          <Accordion.Panel>
            Nossa plataforma utiliza protocolos avançados de segurança, incluindo criptografia de
            dados e autenticação de dois fatores, para garantir que as informações dos clientes e da
            sua empresa estejam sempre protegidas.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="credit-card">
          <Accordion.Control>Existe uma versão gratuita ou de teste para a API?</Accordion.Control>
          <Accordion.Panel>
            Sim! Oferecemos uma versão de teste para que você possa explorar a API e entender como
            ela pode atender às suas necessidades antes de optar por um plano completo.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="payment">
          <Accordion.Control>
            Como funciona a lista de espera e quando terei acesso ao produto?
          </Accordion.Control>
          <Accordion.Panel>
            Ao se inscrever na lista de espera, você será um dos primeiros a ser notificado assim
            que o produto estiver disponível. Planejamos lançar o acesso aos primeiros inscritos nas
            próximas semanas.
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}
