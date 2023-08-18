import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #f5f5f5;
    color: #2F3336;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-family: sans-serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
    outline:none;
  }
`;

// --primary: #111111;
// --secondary: #15181c;
// --search: #202327;
// --white: #f5f5f5;
// --gray: #7a7a7a;
// --outline: #2f3336;
// --retweet: #00c06b;
// --like: #051C3B;
// --twitter: #33a1f2;
// --twitter-dark-hover: #011017;
// --twitter-hover: #2c8ed6;
