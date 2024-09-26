import {
  Input as MantineInput,
  InputProps as MantineInputProps,
  useMantineTheme,
} from '@mantine/core';

type InputProps = {
  label: string;
  placeholder?: string;
} & MantineInputProps;

export const Input = ({ label, placeholder, ...props }: InputProps) => {
  const theme = useMantineTheme();
  return (
    <MantineInput.Wrapper
      label={label}
      styles={{
        label: {
          marginBottom: '8px',
          color: theme.colors.dark[2],
        },
      }}
    >
      <MantineInput
        placeholder={placeholder}
        // component={IMaskInput}
        // mask="00.000.000/0000-00"

        variant="filled"
        size="lg"
        {...props}
      />
    </MantineInput.Wrapper>
  );
};
