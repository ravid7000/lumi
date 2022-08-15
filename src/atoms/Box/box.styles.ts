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
  ${(props) => (props.color ? `color: ${props.color};` : '')}
  ${(props) => (props.bgColor ? `background-color: ${props.bgColor};` : '')}
  ${spacingProps}
  ${radiusProps}
  ${displayProps}
  ${flexAlignItemsProps}
  ${flexJustifyContents}
`;
