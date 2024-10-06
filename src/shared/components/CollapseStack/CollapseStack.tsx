import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { Button, Collapse } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

type CollapseStackProps = {
  label: string;
  helpText?: string;
  children?: React.ReactNode;
};

export const CollapseStack = ({ label, children }: CollapseStackProps) => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <>
      <Collapse in={opened}>{children}</Collapse>
      <Button
        onClick={toggle}
        variant="transparent"
        my="lg"
        leftSection={opened ? <IconChevronUp size={14} /> : <IconChevronDown size={14} />}
      >
        {label}
      </Button>
    </>
  );
};
