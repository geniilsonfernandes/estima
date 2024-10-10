import { createTheme, MantineColorsTuple } from '@mantine/core';

const estimou: MantineColorsTuple = [
  '#f3f7f5',
  '#e7ebe9',
  '#cad6d0',
  '#aac0b5',
  '#8fad9e',
  '#7da28f',
  '#739c87',
  '#618874',
  '#557966',
  '#446957',
];

export const theme = createTheme({
  /** Put your mantine theme override here */
  colors: {
    estimou,
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

  primaryColor: 'estimou',
});
