import styled from 'styled-components';
import { spacingProps } from 'theme';
import type { TypographyProps } from './types';

export const H1 = styled.h1<Pick<TypographyProps, 'align'>>`
  color: inherit;
  font-size: ${(props) => props.theme.typography.h1.fontSize}px;
  font-weight: ${(props) => props.theme.typography.h1.fontWeight};
  line-height: ${(props) => props.theme.typography.h1.lineHeight};
  margin: ${(props) => props.theme.typography.h1.margin};
  ${(props) => (props.align ? `text-align: ${props.align}` : '')};
  ${spacingProps}
`;

export const H2 = styled.h2<Pick<TypographyProps, 'align'>>`
  color: inherit;
  font-size: ${(props) => props.theme.typography.h2.fontSize}px;
  font-weight: ${(props) => props.theme.typography.h2.fontWeight};
  line-height: ${(props) => props.theme.typography.h2.lineHeight};
  margin: ${(props) => props.theme.typography.h2.margin};
  ${(props) => (props.align ? `text-align: ${props.align}` : '')};
  ${spacingProps}
`;

export const H3 = styled.h3<Pick<TypographyProps, 'align'>>`
  color: inherit;
  font-size: ${(props) => props.theme.typography.h3.fontSize}px;
  font-weight: ${(props) => props.theme.typography.h3.fontWeight};
  line-height: ${(props) => props.theme.typography.h3.lineHeight};
  margin: ${(props) => props.theme.typography.h3.margin};
  ${(props) => (props.align ? `text-align: ${props.align}` : '')};
  ${spacingProps}
`;

export const H4 = styled.h4<Pick<TypographyProps, 'align'>>`
  color: inherit;
  font-size: ${(props) => props.theme.typography.h4.fontSize}px;
  font-weight: ${(props) => props.theme.typography.h4.fontWeight};
  line-height: ${(props) => props.theme.typography.h4.lineHeight};
  margin: ${(props) => props.theme.typography.h4.margin};
  ${(props) => (props.align ? `text-align: ${props.align}` : '')};
  ${spacingProps}
`;

export const H5 = styled.h5<Pick<TypographyProps, 'align'>>`
  color: inherit;
  font-size: ${(props) => props.theme.typography.h5.fontSize}px;
  font-weight: ${(props) => props.theme.typography.h5.fontWeight};
  line-height: ${(props) => props.theme.typography.h5.lineHeight};
  margin: ${(props) => props.theme.typography.h5.margin};
  ${(props) => (props.align ? `text-align: ${props.align}` : '')};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  ${spacingProps}
`;

export const H6 = styled.h6<Pick<TypographyProps, 'align'>>`
  color: inherit;
  font-size: ${(props) => props.theme.typography.h6.fontSize}px;
  font-weight: ${(props) => props.theme.typography.h6.fontWeight};
  line-height: ${(props) => props.theme.typography.h6.lineHeight};
  margin: ${(props) => props.theme.typography.h6.margin};
  ${(props) => (props.align ? `text-align: ${props.align}` : '')};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  ${spacingProps}
`;

export const Body = styled.span<Pick<TypographyProps, 'align'>>`
  font-size: ${(props) => props.theme.typography.body.fontSize}px;
  font-weight: ${(props) => props.theme.typography.body.fontWeight};
  line-height: ${(props) => props.theme.typography.body.lineHeight};
  margin: ${(props) => props.theme.typography.body.margin};
  ${(props) => (props.align ? `text-align: ${props.align}` : '')};
  ${spacingProps}
`;

export const Small = styled.small<Pick<TypographyProps, 'align'>>`
  font-size: ${(props) => props.theme.typography.small.fontSize}px;
  font-weight: ${(props) => props.theme.typography.small.fontWeight};
  line-height: ${(props) => props.theme.typography.small.lineHeight};
  margin: ${(props) => props.theme.typography.small.margin};
  ${(props) => (props.align ? `text-align: ${props.align}` : '')};
  ${spacingProps}
`;
