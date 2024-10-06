import { IconCamera, IconEdit } from '@tabler/icons-react';
import { Box, Flex, Modal } from '@mantine/core';
import { Dropzone } from '@mantine/dropzone';
import { useDisclosure } from '@mantine/hooks';
import classes from './LogoUpload.module.css';

export const LogoUpload = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Flex
        h="80px"
        w="80px"
        style={{ borderRadius: '4px', overflow: 'hidden' }}
        c="dark.2"
        bg="gray.2"
        p="sm"
        align="center"
        justify="center"
        className={classes.main}
      >
        <IconEdit />
        <Box onClick={open} className={classes.camera}>
          <IconCamera size={18} />
        </Box>
      </Flex>

      <Modal opened={opened} onClose={close} centered title="Upload da sua logo">
        <Dropzone onDrop={() => {}}>
          <div>Drop files here</div>
        </Dropzone>
      </Modal>
    </>
  );
};
