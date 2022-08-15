import { createGlobalStyle } from 'styled-components';

// Works with ThemeProvider in /theme/context
const GlobalCSS = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme.colors.neutral[800]}
  }
`;

export default GlobalCSS;
