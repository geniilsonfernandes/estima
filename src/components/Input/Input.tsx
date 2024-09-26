import {
  NumberInput as MantineNumberInput,
  Textarea as MantineTextarea,
  NumberInputProps,
  rem,
  TextareaProps,
  TextInput,
  TextInputProps,
  useMantineTheme,
} from '@mantine/core';
import { DateInputProps, DateInput as MantineDateInput } from '@mantine/dates';

export const Input = (props: TextInputProps) => {
  const theme = useMantineTheme();

  return (
    <TextInput
      styles={{
        label: {
          marginBottom: '8px',
          color: theme.colors.dark[2],
          fontSize: rem(14),
        },
      }}
      variant="filled"
      size="lg"
      {...props}
    />
  );
};

export const DateInput = (props: DateInputProps) => {
  const theme = useMantineTheme();

  return (
    <MantineDateInput
      styles={{
        label: {
          marginBottom: '8px',
          color: theme.colors.dark[2],
          fontSize: rem(14),
        },
      }}
      variant="filled"
      size="lg"
      {...props}
    />
  );
};

export const NumberInput = (props: NumberInputProps) => {
  const theme = useMantineTheme();

  return (
    <MantineNumberInput
      styles={{
        label: {
          marginBottom: '8px',
          color: theme.colors.dark[2],
          fontSize: rem(14),
        },
      }}
      variant="filled"
      size="lg"
      {...props}
    />
  );
};

export const Textarea = (props: TextareaProps) => {
  const theme = useMantineTheme();

  return (
    <MantineTextarea
      styles={{
        label: {
          marginBottom: '8px',
          color: theme.colors.dark[2],
          fontSize: rem(14),
        },
      }}
      variant="filled"
      size="lg"
      {...props}
    />
  );
};
