import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  :root{
    --cinza-escuro: rgb(32, 32, 36);
    --preto: rgb(18, 18, 20);
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: var(--preto);
    font: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  .card, .list-group-item{
    background: var(--cinza-escuro)
  }

  .list-group-item:hover{
    background: var(--preto);
    cursor: pointer;
  }

  a{
    text-decoration: none;
  }
`;
 
export default GlobalStyle;

