import type {
  SpacingProps,
  RadiusProps,
  DisplayProps,
  FlexAlignItems,
  FlexJustifyContents,
} from 'theme/types';

export type BoxProps = SpacingProps & {
  color?: string;
  bgColor?: string;
  borderRadius?: RadiusProps;
  displayType?: DisplayProps;
  alignItems?: FlexAlignItems;
  justifyContent?: FlexJustifyContents;
};
