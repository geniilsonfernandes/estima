import '@mantine/core/styles.css';

import React from 'react';
import { MantineProvider } from '@mantine/core';
import { theme } from '../src/theme';

// const channel = addons.getChannel();

// function ColorSchemeWrapper({ children }: { children: React.ReactNode }) {
//   const { setColorScheme } = useMantineColorScheme();

//   const [isDark, setDark] = useState(false);

//   useEffect(() => {
//     // listen to DARK_MODE event
//     channel.on(DARK_MODE_EVENT_NAME, setDark);
//     return () => channel.off(DARK_MODE_EVENT_NAME, setDark);
//   }, [channel, setDark]);

//   useEffect(() => {
//     console.log(isDark);

//     setColorScheme(isDark ? 'light' : 'dark');
//   }, [isDark]);

//   return children;
// }

export const decorators = [
  // (renderStory: any) => <ColorSchemeWrapper>{renderStory()}</ColorSchemeWrapper>,
  (renderStory: any) => <MantineProvider theme={theme}>{renderStory()}</MantineProvider>,
];