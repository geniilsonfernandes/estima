import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/dropzone/styles.css';
import 'dayjs/locale/pt';

import { MantineProvider } from '@mantine/core';
import { DatesProvider } from '@mantine/dates';
import { Router } from './Router';
import { theme } from './theme';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <DatesProvider settings={{ locale: 'pt' }}>
        <Router />
      </DatesProvider>
    </MantineProvider>
  );
}
