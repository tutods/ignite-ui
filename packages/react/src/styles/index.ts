import { createStitches, defaultThemeMap } from '@stitches/react';
import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from '@tutods-ignite-ui/tokens';

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
  theme,
} = createStitches({
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  },

  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
});
