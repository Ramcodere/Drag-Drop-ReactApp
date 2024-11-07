
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
    color: #333;
    line-height: 1.6;
  }

  h1, h2, h3 {
    font-weight: normal;
    margin-bottom: 10px;
  }

  button {
    cursor: pointer;
    border: none;
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    border-radius: 5px;
    font-size: 16px;
  }

  button:hover {
    background-color: #0056b3;
  }

  input[type='text'],
  input[type='number'],
  input[type='color'] {
    padding: 5px;
    font-size: 14px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
`;

export default GlobalStyles;
