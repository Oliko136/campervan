import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  line-height: 1.5;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);, background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

button {
  font-family: inherit;
  border: none;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
}

a {
  text-decoration: none;
}

input, 
textarea {
    font-family: inherit;
}

input:focus,
textarea:focus {
    outline: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
`

export default GlobalStyles;