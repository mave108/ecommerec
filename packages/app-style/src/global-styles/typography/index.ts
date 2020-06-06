import { css, createGlobalStyle } from 'styled-components';

export const Typography = createGlobalStyle`
@font-face {
font-family: system;
font-style: normal;
font-weight: 400;
src: local(".SFNSText"), local(".HelveticaNeueDeskInterface"), local(".LucidaGrandeUI"), local("Ubuntu"), local("Segoe UI"), local("Roboto"), local("DroidSans"), local("Tahoma");
}
html {
line-height: 1.5;
${({ theme }) => css`
  font-family: ${theme.fontFamilies.graphikCompact};
  font-size: ${theme.fontSizes[500]};
`};
}
input,
textarea,
select,
button {
color: inherit;
font-family: inherit;
letter-spacing: inherit;
}
`;
