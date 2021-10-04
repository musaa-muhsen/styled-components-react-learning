import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
// import fonts here maybe
   * {
       padding: 0;
       margin: 0;
   }

   body {
       background: ${({theme}) => theme.colors.body }
   }
   // etc
`

export default GlobalStyles