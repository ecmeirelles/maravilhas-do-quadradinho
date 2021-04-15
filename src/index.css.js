import { createGlobalStyle } from 'styled-components';

import { colors } from './app/shared/variables';

export const GlobalStyle = createGlobalStyle`
html, body {
  margin: 0;
  width: 100%;
  height: 100%;
  font-family: 'Nunito', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6,
p, span, div, a {
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
  font-weight: 300;
  color: ${colors.petrol};
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
  font-size: 24px;
  font-weight: 600;
}

a {
  text-decoration: none;
}

button {
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
}
`;
