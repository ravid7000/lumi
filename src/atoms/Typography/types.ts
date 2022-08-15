import type { SpacingProps } from 'theme/types';

export interface TypographyProps extends SpacingProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'small';
  align?: 'left' | 'right' | 'center';
  text: string;
}
