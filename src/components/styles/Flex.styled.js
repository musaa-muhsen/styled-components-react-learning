import styled from "styled-components";
// any direct div or direct ul we're going to se flex
export const Flex = styled.div`
      display: flex;
      align-items: center;
     
      & > div,
      & > ul {
          flex: 1;
      }

      @media (max-width: ${({theme}) => theme.mobile }) {
        flex-direction: column;
        text-align: center;
      }

`