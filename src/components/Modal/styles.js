import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5rem; */

  @media ${(props) => props.theme.breakpoints.sm} {
    /* display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem; */
  }
`;

export const Div1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    /* display: flex;
    grid-area: 1 / 1 / 2 / 3; */
  }
`;

export const ButtonContainer = styled.div`
    cursor: pointer;
    display: inline-block;
    text-align: center;
    transition: .3s;
    a {
      padding: 10px;
    }
    #button-six {
      margin: 0 -.5em;
      padding: 1em 3em;
      background: darkturquoise;
      background: linear-gradient(-45deg, #414141, #414141, #414141, #414141);
      background-size: 400% 400%;
      border-radius: 10px;
    }
    :hover {
      transform: scale(1.1);
      a {
        color: white;
      }
    }
`;

export const Span = styled.span`
  font-size: 4rem;
  padding: 1rem;
  color: black;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

export const StyledButton = styled.div`
  padding-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
`;

