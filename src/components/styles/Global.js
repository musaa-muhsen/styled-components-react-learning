import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
// import fonts here maybe
   * {
       padding: 0;
       margin: 0;
   }

   body {
       background: ${({theme}) => theme.colors.body };
       font-family: sans-serif;
   }
   // etc
`

export default GlobalStyles