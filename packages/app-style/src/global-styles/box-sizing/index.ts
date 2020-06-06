import { createGlobalStyle } from 'styled-components';
export const BoxSizing = createGlobalStyle`
html {
box-sizing: border-box;
}
*,
*::before,
*::after {
box-sizing: inherit;
}
`;
