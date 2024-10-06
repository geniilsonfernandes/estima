import { IconDownload, IconEye, IconReplace } from '@tabler/icons-react';
import { ActionIcon, Button, Center, Flex, Stack } from '@mantine/core';
import { TemplatePreview } from '../../../../shared/components/TemplatePreview/TemplatePreview';
import { useTemplateStore } from '../../store';

export const Preview = () => {
  const { openModal, template } = useTemplateStore((state) => state);
  return (
    <Stack
      p="md"
      bg="estimou.9"
      h="100%"
      style={{
        borderRadius: '8px',
      }}
    >
      <Flex align="center" justify="space-between">
        <Flex gap="sm">
          <Button
            variant="outline"
            onClick={() => openModal(true)}
            leftSection={<IconReplace size={18} />}
            size="sm"
          >
            Seleciona modelo
          </Button>
        </Flex>
        <Flex gap="sm">
          <ActionIcon variant="outline" size="lg">
            <IconEye size={18} />
          </ActionIcon>
          <Button variant="solid" leftSection={<IconDownload size={18} />} size="sm">
            Baixar orçamento
          </Button>
        </Flex>
      </Flex>
      <Center flex={1} w="100%">
        <TemplatePreview label={template} />
      </Center>
    </Stack>
  );
};
