import delve from 'dlv';
import { theme as defaultTheme } from './defaults';
// TODO: eventually add in support for custom themes
export function createTheme() {
  return defaultTheme;
}
export function t(path: string) {
  return (props: any) => {
    return delve(props.theme, path);
  };
}
export * from './types';
export * from './defaults';
