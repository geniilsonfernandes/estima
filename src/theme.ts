import {
  createTheme,
  InputBase,
  MantineColorsTuple,
  PasswordInput,
  TextInput,
} from '@mantine/core';

const estimou: MantineColorsTuple = [
  '#effbf3',
  '#def4e6',
  '#b8e8c9',
  '#8fddaa',
  '#6dd390',
  '#58cd7f',
  '#4dca76',
  '#3eb264',
  '#074E3A',
  '#012C23',
];
const base: MantineColorsTuple = [
  '#f9f9f9',
  '#e7e7e7',
  '#cdcdcd',
  '#b2b2b2',
  '#9a9a9a',
  '#8b8b8b',
  '#848484',
  '#717171',
  '#656565',
  '#575757',
];

export const theme = createTheme({
  /** Put your mantine theme override here */
  colors: {
    estimou,
    base,
    blackAlpha: [
      'rgba(0, 0, 0, 0)',
      'rgba(0, 0, 0, 0.01)',
      'rgba(0, 0, 0, 0.02)',
      'rgba(0, 0, 0, 0.03)',
      'rgba(0, 0, 0, 0.04)',
      'rgba(0, 0, 0, 0.05)',
      'rgba(0, 0, 0, 0.06)',
      'rgba(0, 0, 0, 0.07)',
      'rgba(0, 0, 0, 0.08)',
      'rgba(0, 0, 0, 0.09)',
    ],
  },
  components: {
    TextInput: TextInput.extend({
      styles: (theme) => ({
        label: {
          marginBottom: '4px',
          color: theme.colors.dark[5],
        },
      }),
    }),
    InputBase: InputBase.extend({
      styles: (theme) => ({
        label: {
          marginBottom: '4px',
          color: theme.colors.dark[5],
        },
      }),
    }),
    PasswordInput: PasswordInput.extend({
      styles: (theme) => ({
        label: {
          marginBottom: '4px',
          color: theme.colors.dark[5],
        },
      }),
    }),
    Input: InputBase.extend({
      styles: (theme) => ({
        input: {
          color: theme.colors.dark[3],
        },
      }),
    }),
  },

  primaryColor: 'estimou',
});
