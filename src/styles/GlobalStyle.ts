'use client';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Box sizing reset */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  /* Remove default margin */
  * {
    margin: 0;
    padding: 0;
  }

  /* Set core body defaults */
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    background-color: #fff;
    color: #111;
    line-height: 1.5;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Reset headings */
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.2;
  }

  /* Remove list styles */
  ul, ol {
    list-style: none;
  }

  /* Anchor tag reset */
  a {
    color: inherit;
    text-decoration: none;
  }

  /* Button reset */
  button {
    font: inherit;
    background: none;
    border: none;
    cursor: pointer;
  }

  /* Input, textarea reset */
  input, textarea, select {
    font: inherit;
    outline: none;
    border: none;
  }

  /* Image reset */
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  /* Link focus for accessibility */
  a:focus-visible {
    outline: 2px solid #007aff;
    outline-offset: 2px;
  }

  /* Scrollbar style (optional) */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #007aff;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }
`;

export default GlobalStyle;
