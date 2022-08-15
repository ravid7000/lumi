import type {
  DisplayProps,
  SpacingProps,
  RadiusProps,
  Theme,
  FlexAlignItems,
  FlexJustifyContents,
} from './types';

function normalizeSpacing(spacing: number | string, theme?: Theme) {
  if (
    (spacing === 'xs' ||
      spacing === 's' ||
      spacing === 'm' ||
      spacing === 'l') &&
    theme?.spacing?.[spacing]
  ) {
    return `${theme.spacing[spacing]}px`;
  }
  return typeof spacing === 'string' ? spacing : `${spacing}px`;
}

export function spacingProps<Props extends SpacingProps & { theme: Theme }>(
  sp: Props,
): string {
  let str = '';

  // margin
  if (sp.m) {
    str += `margin: ${normalizeSpacing(sp.m, sp.theme)};`;
  }
  if (sp.mx && sp.my) {
    str += `margin: ${normalizeSpacing(sp.my, sp.theme)} ${normalizeSpacing(
      sp.mx,
      sp.theme,
    )};`;
  } else if (sp.my) {
    str += `margin: ${normalizeSpacing(sp.my, sp.theme)} 0;`;
  } else if (sp.mx) {
    str += `margin: 0 ${normalizeSpacing(sp.mx, sp.theme)};`;
  }
  if (sp.mt && sp.mb && sp.ml && sp.mr) {
    str += `margin: ${normalizeSpacing(sp.mt, sp.theme)} ${normalizeSpacing(
      sp.mr,
      sp.theme,
    )} ${normalizeSpacing(sp.mb, sp.theme)} ${normalizeSpacing(
      sp.ml,
      sp.theme,
    )};`;
  } else {
    if (sp.mt) {
      str += `margin-top: ${normalizeSpacing(sp.mt, sp.theme)};`;
    }
    if (sp.mb) {
      str += `margin-bottom: ${normalizeSpacing(sp.mb, sp.theme)};`;
    }
    if (sp.ml) {
      str += `margin-left: ${normalizeSpacing(sp.ml, sp.theme)};`;
    }
    if (sp.mr) {
      str += `margin-right: ${normalizeSpacing(sp.mr, sp.theme)};`;
    }
  }

  // padding
  if (sp.p) {
    str += `padding: ${normalizeSpacing(sp.p, sp.theme)};`;
  }
  if (sp.px && sp.py) {
    str += `padding: ${normalizeSpacing(sp.py, sp.theme)} ${normalizeSpacing(
      sp.px,
      sp.theme,
    )};`;
  } else if (sp.py) {
    str += `padding: ${normalizeSpacing(sp.py, sp.theme)} 0;`;
  } else if (sp.px) {
    str += `padding: 0 ${normalizeSpacing(sp.px, sp.theme)};`;
  }
  if (sp.pt && sp.pb && sp.pl && sp.pr) {
    str += `padding: ${normalizeSpacing(sp.pt, sp.theme)} ${normalizeSpacing(
      sp.pr,
      sp.theme,
    )} ${normalizeSpacing(sp.pb, sp.theme)} ${normalizeSpacing(
      sp.pl,
      sp.theme,
    )};`;
  } else {
    if (sp.pt) {
      str += `padding-top: ${normalizeSpacing(sp.pt, sp.theme)};`;
    }
    if (sp.pb) {
      str += `padding-bottom: ${normalizeSpacing(sp.pb, sp.theme)};`;
    }
    if (sp.pl) {
      str += `padding-left: ${normalizeSpacing(sp.pl, sp.theme)};`;
    }
    if (sp.pr) {
      str += `padding-right: ${normalizeSpacing(sp.pr, sp.theme)};`;
    }
  }

  return str;
}

export function radiusProps<
  Props extends { theme?: Theme; borderRadius?: RadiusProps },
>(props: Props): string {
  if (props.borderRadius) {
    if (props.theme?.radius[props.borderRadius]) {
      return `border-radius: ${props.theme.radius[props.borderRadius]}px;`;
    }
    return `border-radius: ${props.theme?.radius[props.borderRadius]};`;
  }
  return '';
}

export function displayProps<Props extends { displayType?: DisplayProps }>(
  props: Props,
): string {
  if (props.displayType) {
    return `display: ${props.displayType};`;
  }
  return '';
}

export function flexAlignItemsProps<
  Props extends { alignItems?: FlexAlignItems },
>(props: Props): string {
  if (props.alignItems) {
    return `align-items: ${props.alignItems};`;
  }
  return '';
}

export function flexJustifyContents<
  Props extends { justifyContent?: FlexJustifyContents },
>(props: Props): string {
  if (props.justifyContent) {
    return `justify-content: ${props.justifyContent};`;
  }
  return '';
}
