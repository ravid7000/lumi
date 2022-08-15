import styled from 'styled-components';
import {
  spacingProps,
  radiusProps,
  displayProps,
  flexAlignItemsProps,
  flexJustifyContents,
} from 'theme';
import type { BoxProps } from './types';

export const Box = styled.div<BoxProps>`
  ${({ color }) => (color ? `color: ${color};` : '')}
  ${({ bgColor }) => (bgColor ? `background-color: ${bgColor};` : '')}
  ${({ height }) => (height ? `height: ${height};` : '')}
  ${({ width }) => (width ? `width: ${width};` : '')}
  ${spacingProps}
  ${radiusProps}
  ${displayProps}
  ${flexAlignItemsProps}
  ${flexJustifyContents}
`;
