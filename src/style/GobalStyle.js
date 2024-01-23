import { createGlobalStyle } from "styled-components";

const GobalStyle = createGlobalStyle`
:root{
  --color-light-1:#343a40;
  --color-light-2:#212529;
  --color-grey-1:#adb5bd;
  --color-light-3:#f8f9fa;
  --color-grey-3:#ced4da;
  --color-dark-1:#1a1919;
  --color-dark-2:#2c292a;

  --white:#fff;

  --color-pink:#f26ca7;
  --color-red:#ff5964;
  --color-blue:#0080af;
  --color-green:#5fad56;
  --color-yellow:#f2c14e;

  --font-1: 'Arimo', sans-serif;
  --font-2: 'Josefin Sans', sans-serif;
  --font-3:'VT323', monospace;
}


*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

}

html {
  scroll-behavior:smooth;
  @media screen and (max-width:412px) {
    max-width: 412px;
  }
}

body {
  background-color:var(--color-light-2);
}

button {
  cursor: pointer;
}

`;

export default GobalStyle;
