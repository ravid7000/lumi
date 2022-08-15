import React, { useCallback, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

// atoms
import GlobalCSS from 'atoms/GlobalCSS';

import type { Theme } from './types';
import { createBaseTheme } from './base-theme';

export const ThemeProvider: React.FunctionComponent = ({ children }) => {
  const [baseTheme] = useState<Theme>(createBaseTheme());
  const setMode = useCallback(() => {}, []);
  return (
    <StyledThemeProvider theme={{ ...baseTheme, setMode }}>
      <GlobalCSS />
      {children}
    </StyledThemeProvider>
  );
};
