import React from 'react';
import * as Styles from './typography.styles';
import type { TypographyProps } from './types';

function Typography({
  variant,
  text,
  align,
  ...rest
}: TypographyProps): JSX.Element | null {
  switch (variant) {
    case 'h1':
      return (
        <Styles.H1
          align={align}
          {...rest}
        >
          {text}
        </Styles.H1>
      );
    case 'h2':
      return (
        <Styles.H2
          align={align}
          {...rest}
        >
          {text}
        </Styles.H2>
      );
    case 'h3':
      return (
        <Styles.H3
          align={align}
          {...rest}
        >
          {text}
        </Styles.H3>
      );
    case 'h4':
      return (
        <Styles.H4
          align={align}
          {...rest}
        >
          {text}
        </Styles.H4>
      );
    case 'h5':
      return (
        <Styles.H5
          align={align}
          {...rest}
        >
          {text}
        </Styles.H5>
      );
    case 'h6':
      return (
        <Styles.H6
          align={align}
          {...rest}
        >
          {text}
        </Styles.H6>
      );
    case 'small':
      return (
        <Styles.Small
          align={align}
          {...rest}
        >
          {text}
        </Styles.Small>
      );
    default:
      return (
        <Styles.Body
          align={align}
          {...rest}
        >
          {text}
        </Styles.Body>
      );
  }
}

export default Typography;
