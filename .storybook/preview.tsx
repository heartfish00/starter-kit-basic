import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import type { Preview, Decorator } from '@storybook/react';

import theme from '../src/styles/theme';

// Google Material Symbols 폰트 로드 (Outlined, Rounded, Sharp)
const materialSymbolsStyles: string[] = [
  'Material+Symbols+Outlined',
  'Material+Symbols+Rounded',
  'Material+Symbols+Sharp',
];

if (typeof document !== 'undefined') {
  materialSymbolsStyles.forEach((family) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `https://fonts.googleapis.com/css2?family=${family}:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap`;
    document.head.appendChild(link);
  });
}

const withTheme: Decorator = (Story) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Story />
  </ThemeProvider>
);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
    options: {
      storySort: {
        order: [
          'Overview',
          'Style', ['Overview', 'Colors', 'Typography', 'Icons'],
          'Component',
          'Template',
          'Page',
        ],
        method: 'alphabetical',
      },
    },
  },
  decorators: [withTheme],
};

export default preview;
