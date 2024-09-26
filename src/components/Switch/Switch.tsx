import { Group, Switch as MantineSwitch, SwitchProps } from '@mantine/core';
import classes from './Switch.module.css';

export const Switch = (props: SwitchProps) => {
  return (
    <Group justify="center" p="md">
      <MantineSwitch classNames={classes} {...props} />
    </Group>
  );
};
