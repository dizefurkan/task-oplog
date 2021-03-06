import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  body {
    margin: 0;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Fira Sans,Ubuntu,Oxygen,Oxygen Sans,Cantarell,Droid Sans,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Lucida Grande,Helvetica,Arial,sans-serif;
    font-size: 1.6rem;
    line-height: 1.5;
    background-color: #f5f5f5;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    padding: 0;
  }
`;