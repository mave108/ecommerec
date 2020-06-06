export interface Theme {
  colors: Colors;
  fontFamilies: FontFamilies;
  fontSizes: FontSizeIntensities;
  fontWeights: Intensities;
  radii: Intensities;
  spacings: Intensities;
  breakpoints: Breakpoints;
}
interface FontFamilies {
  mono: string;
  serif: string;
  sansSerif: string;
  compact: string;
  graphik: string;
  graphikCompact: string;
}
interface Breakpoints {
  fullHD: string;
  widescreen: string;
  desktop: string;
  tablet: string;
  mobile: string;
}
interface Colors {
  neutral: Intensities;
  black: string;
  white: string;
  grey: Intensities;
  red: Intensities;
  orange: Intensities;
  yellow: Intensities;
  green: Intensities;
  blue: Intensities;
  purple: Intensities;
}
interface Intensities {
  '000'?: string | number;
  '100': string | number;
  '200': string | number;
  '300': string | number;
  '400': string | number;
  '500': string | number;
  '600': string | number;
  '700': string | number;
  '800': string | number;
  '900': string | number;
  '1000'?: string | number;
}
interface FontSizeIntensities extends Intensities {
  '250': string | number;
}
