import { IconSparkles, IconStack2Filled } from '@tabler/icons-react';
import { Modal, ScrollArea, Stack } from '@mantine/core';
import { useTemplateStore } from '../../store';
import { TemplateSelectContent } from './TemplateSelectContent';
import { TemplateSelectFooter } from './TemplateSelectFooter';
import { TemplateSelectHeader } from './TemplateSelectHeader';

export const TemplateSelect = () => {
  const { opened, openModal, setTemplate, template } = useTemplateStore((state) => state);

  return (
    <Modal
      opened={opened}
      onClose={() => openModal(false)}
      size="100%"
      withCloseButton={false}
      scrollAreaComponent={ScrollArea.Autosize}
      padding={0}
    >
      <TemplateSelectHeader />
      <Stack p="xl">
        <TemplateSelectContent icon={<IconSparkles size={18} />} label="Populares:" />
        <TemplateSelectContent icon={<IconStack2Filled size={18} />} label="Todos os modelos:" />
        <TemplateSelectFooter />
      </Stack>
    </Modal>
  );
};
