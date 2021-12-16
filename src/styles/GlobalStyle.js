import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  vertical-align: baseline;
  text-decoration: none
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
  background-color: #181820;
  color: #FFFFFF;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.75);
  &:hover {
    filter: brightness(0.7);
    cursor: pointer;
  }
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`;

export default GlobalStyle;
