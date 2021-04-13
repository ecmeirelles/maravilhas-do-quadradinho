import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: 'Nunito', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6,
p, span, div, a {
  font-family: 'Nunito', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
}

a {
  text-decoration: none;
}
`;
