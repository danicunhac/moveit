import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #fff;
    --background: #f2f3f5;
    --gray-line: #dcdde0;
    --text: #666666;
    --text-highlight: #b3b9ff;
    --title: #2e384d;
    --red: #e83f5b;
    --red-dark: #d21937;
    --green: #4cd62b;
    --green-dark: #3cac21;
    --blue: #5965e0;
    --blue-dark: #4953b8;
    --blue-twitter: #2aa9e0;
    --blue-light: #f5fcff;
    --shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    color: var(--text);
  }

  body,
  input,
  textarea,
  button {
    font: 400 1rem 'Inter', sans-serif;
    outline: 0;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
