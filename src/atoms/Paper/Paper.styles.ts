import styled from 'styled-components';

import Box from 'atoms/Box';
import type { BoxProps } from 'atoms/Box/types';

export interface PaperProps extends BoxProps {
  noShadow?: boolean;
  noRadius?: boolean;
}

export const Paper = styled(Box).attrs<PaperProps>(({ noRadius }) => ({
  borderRadius: !noRadius ? 's' : undefined,
}))<PaperProps>`
  background-color: ${({ theme }) => theme.colors.neutral[0]};
  ${({ theme, noShadow }) =>
    !noShadow ? `box-shadow: ${theme.shadow.m};` : ''}
`;
