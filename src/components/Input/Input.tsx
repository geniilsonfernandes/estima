import { IMaskInput, IMaskInputProps } from 'react-imask';
import {
  InputBase,
  InputBaseProps,
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

export const InputMask = (props: InputBaseProps & IMaskInputProps<HTMLInputElement>) => {
  const theme = useMantineTheme();

  return (
    <InputBase
      styles={{
        label: {
          marginBottom: '8px',
          color: theme.colors.dark[2],
          fontSize: rem(14),
        },
        input: {
          fontSize: rem(16),
          lineHeight: rem(24),
          color: theme.colors.dark[5],
        },
      }}
      variant="filled"
      size="lg"
      component={IMaskInput}
      {...props}
    />
  );
};
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
        input: {
          fontSize: rem(16),
          lineHeight: rem(24),
          color: theme.colors.dark[5],
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
        input: {
          fontSize: rem(16),
          lineHeight: rem(24),
          color: theme.colors.dark[5],
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
        input: {
          fontSize: rem(16),
          lineHeight: rem(24),
          color: theme.colors.dark[5],
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
        input: {
          fontSize: rem(16),
          lineHeight: rem(24),
          color: theme.colors.dark[5],
        },
      }}
      variant="filled"
      size="lg"
      {...props}
    />
  );
};