import { Flex, Modal, Stack, Text, Title, useMantineTheme } from '@mantine/core';
import { SearchInput } from '@/shared/components/SearchInput/SearchInput';
import { TemplateButton } from '@/shared/components/TemplateButton/TemplateButton';
import { templates, useTemplateStore } from '../../store';

export const TemplateSelect = () => {
  const { radius } = useMantineTheme();
  const { opened, openModal, setTemplate, template } = useTemplateStore((state) => state);

  return (
    <Modal opened={opened} onClose={() => openModal(false)} size="80%">
      <Stack mx="auto" px="lg" maw={{ base: '100%', sm: '600px' }} align="stretch" justify="center">
        <Title order={3} c="dark.4" ta="center">
          Selecione um modelo de orçamento {template}
        </Title>
        <Text c="dimmed" ta="center" size="md" mx="auto">
          Clique no botão abaixo para selecionar o modelo de orçamento.
        </Text>
        <SearchInput placeholder="Pesquisar modelos" />
      </Stack>
      <Flex
        mt="xl"
        gap="sm"
        justify="center"
        align="flex-start"
        direction="row"
        wrap="wrap"
        bg="dark.2"
        p="lg"
        style={{
          borderRadius: radius.md,
        }}
      >
        {templates.map((temp) => (
          <TemplateButton
            key={temp}
            label={temp}
            onClick={() => setTemplate(temp)}
            active={temp === template}
          />
        ))}
      </Flex>
    </Modal>
  );
};
