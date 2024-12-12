import { createTheme, InputBase, MantineColorsTuple, TextInput } from '@mantine/core';

const estimou: MantineColorsTuple = [
  '#e3fdf9',
  '#d5f5ef',
  '#b1e7de',
  '#89d9cb',
  '#68ccbb',
  '#52c5b1',
  '#43c2ac',
  '#31ab97',
  '#229886',
  '#1D463E',
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
