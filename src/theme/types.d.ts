type ThemeColorBase = {
  light: string;
  main: string;
  dark: string;
};

type ThemeTypographyBase = {
  fontSize: number;
  fontWeight: number;
  lineHeight: number;
  margin: number;
};

export interface Theme {
  mode: 'light' | 'dark';
  colors: {
    primary: ThemeColorBase;
    info: string;
    danger: string;
    warning: string;
    success: string;
    neutral: {
      0: string;
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
  };
  typography: {
    h1: ThemeTypographyBase;
    h2: ThemeTypographyBase;
    h3: ThemeTypographyBase;
    h4: ThemeTypographyBase;
    h5: ThemeTypographyBase;
    h6: ThemeTypographyBase;
    body: ThemeTypographyBase;
    button: ThemeTypographyBase;
    small: ThemeTypographyBase;
  };
  shadow: {
    xs: string;
    s: string;
    m: string;
    l: string;
  };
  spacing: {
    xs: number;
    s: number;
    m: number;
    l: number;
    toPoint: (
      top: number | string,
      right?: number | string,
      bottom?: number | string,
      left?: number | string,
    ) => string;
  };
  radius: {
    xs: number;
    s: number;
    m: number;
    l: number;
  };
  transition: {
    duration: {
      slow: string;
      medium: string;
      fast: string;
    };
    getTrans: (
      transitionType: string,
      duration: 'slow' | 'medium' | 'fast',
    ) => string;
  };
}

export interface ThemeContext extends Theme {
  setMode: (mode: 'dark' | 'light') => void;
}

// Theme utilities
export interface SpacingProps {
  m?: number | string;
  mx?: number | string;
  my?: number | string;
  mt?: number | string;
  mb?: number | string;
  ml?: number | string;
  mr?: number | string;
  p?: number | string;
  px?: number | string;
  py?: number | string;
  pt?: number | string;
  pb?: number | string;
  pl?: number | string;
  pr?: number | string;
}

export type RadiusProps = 'xs' | 's' | 'm' | 'l';

export type DisplayProps =
  | 'block'
  | 'inline'
  | 'inline-block'
  | 'flex'
  | 'inline-flex'
  | 'grid'
  | 'inline-grid';

export type FlexAlignItems = 'center' | 'flex-start' | 'flex-end';

export type FlexJustifyContents = 'center' | 'flex-start' | 'flex-end';

export type FlexWrap = 'wrap' | 'nowarp';
