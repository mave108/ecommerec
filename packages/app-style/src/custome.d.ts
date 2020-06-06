import React from 'react';
import { Theme } from './theme';
declare module '*.svg' {
  const content: (React.FC & React.SVGAttributes<any>) | string;
  export default content;
}
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {} // eslint-disable-line @typescript-eslint/no-empty-interface
}
declare module '*.md';
declare module '*.woff';
declare module '*.woff2';
