import React from 'react';

// theme
import { ThemeProvider } from '../theme';

// modules
import GetStarted from './modules/GetStarted';
import Editing from './modules/Editing';
import Exports from './modules/Exports';

function App(): JSX.Element {
  return (
    <ThemeProvider>
      This is a styled components app
      <GetStarted />
      <Editing />
      <Exports />
    </ThemeProvider>
  );
}

export default App;
