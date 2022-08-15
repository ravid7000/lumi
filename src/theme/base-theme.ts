import type { Theme } from './types';

const createColors = (): Theme['colors'] => {
  return {
    primary: {
      light: '#31A2E8',
      main: '#277AF6',
      dark: '#0E5FC5',
    },
    info: '#31A2E8',
    warning: '#E76E3A',
    danger: '#DC2E35',
    success: '#1D9370',
    neutral: {
      0: '#FFFFFF',
      50: '#E2E9F1',
      100: '#D3DBE4',
      200: '#B7BFC8',
      300: '#9CA3AD',
      400: '#818791',
      500: '#676C76',
      600: '#4E525A',
      700: '#35383F',
      800: '#1D1F23',
      900: '#060708',
    },
  };
};

type Headings = Pick<
  Theme['typography'],
  'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
>;

const createTypography = (): Theme['typography'] => {
  const headings: Array<keyof Headings> = ['h6', 'h5', 'h4', 'h3', 'h2', 'h1'];
  const baseFontSize = 16;
  const scale = 1.3333;
  const fontWeight = 400;
  const lineHeight = 1;
  const margin = 0;

  let accum = baseFontSize;
  const type = headings.reduce((prev, heading) => {
    let head = {
      ...prev,
      [heading]: {
        fontSize: Math.round(accum),
        fontWeight: 600,
        lineHeight,
        margin: 0,
      },
    };
    accum *= scale;
    return head;
  }, {});

  return {
    small: {
      fontSize: Math.round(baseFontSize / scale),
      fontWeight,
      lineHeight,
      margin,
    },
    body: {
      fontSize: baseFontSize,
      fontWeight,
      lineHeight,
      margin,
    },
    button: {
      fontSize: baseFontSize,
      fontWeight,
      lineHeight,
      margin,
    },
    ...(type as Headings),
  };
};

const createShadow = (): Theme['shadow'] => {
  const contrast = 'rgba(0,0,0,0.25)';
  return {
    xs: `0 2px 4px ${contrast}`,
    s: `0 4px 4px ${contrast}`,
    m: `0 8px 8px ${contrast}`,
    l: `0 16px 16px ${contrast}`,
  };
};

const createSpacing = (): Theme['spacing'] => {
  const xs = 4;
  const tSizes: { [k: string]: number } = {
    xs,
    s: xs * 2,
    m: xs * 3,
    l: xs * 4,
  };

  const toPoint: Theme['spacing']['toPoint'] = (top, right, bottom, left) => {
    const sizes = [top, right, bottom, left];
    return sizes
      .filter((size) => size)
      .map((size) => {
        if (typeof size === 'string' && tSizes[size]) {
          return tSizes[size];
        }
        return size;
      })
      .map((size) => {
        if (typeof size === 'string' && size.indexOf('px') > -1) {
          return size;
        }
        return `${size}px`;
      })
      .join(' ');
  };

  return {
    xs: tSizes.xs,
    s: tSizes.s,
    m: tSizes.m,
    l: tSizes.l,
    toPoint,
  };
};

const createRadius = (): Theme['radius'] => {
  return {
    xs: 2,
    s: 4,
    m: 6,
    l: 8,
  };
};

const createTransition = (): Theme['transition'] => {
  const duration = {
    slow: '600ms',
    medium: '400ms',
    fast: '200ms',
  };

  const getTrans: Theme['transition']['getTrans'] = (transitionType, dur) => {
    return `${transitionType} ${duration[dur]}`;
  };

  return {
    duration,
    getTrans,
  };
};

export function createBaseTheme(mode: Theme['mode'] = 'light'): Theme {
  return {
    mode,
    colors: createColors(),
    typography: createTypography(),
    shadow: createShadow(),
    spacing: createSpacing(),
    radius: createRadius(),
    transition: createTransition(),
  };
}
