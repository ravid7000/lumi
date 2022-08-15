import 'styled-components';
import type { ThemeContext } from '../src/theme/types'

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeContext {}
}