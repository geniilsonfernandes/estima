import { createTheme, MantineColorsTuple } from '@mantine/core';

const estimou: MantineColorsTuple = [
  '#ebfbeb',
  '#def0dd',
  '#bddebc',
  '#9bca99',
  '#7eb97b',
  '#6baf68',
  '#60aa5d',
  '#4f954c',
  '#448542',
  '#25392f',
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