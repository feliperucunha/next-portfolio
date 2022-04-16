import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 15%;
  left: 28%;
  border: 1px solid black;
  border-radius: 10px;
  padding: 1rem;
  z-index: 3;
  background-color: white;
  text-align: center;
  overflow: auto;

  @media ${(props) => props.theme.breakpoints.sm} {

  }
`;

export const LastContainer = styled.div`
  position: fixed;
  top: 25%;
  left: 22%;
  border: 1px solid black;
  border-radius: 10px;
  padding: 1rem;
  z-index: 3;
  background-color: white;
  text-align: center;
  overflow: auto;

  @media ${(props) => props.theme.breakpoints.sm} {

  }
`;

export const Div1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;
  @media ${(props) => props.theme.breakpoints.sm} {

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
      display: flex;
      margin: 0 -.5em;
      padding: 1em 3em;
      background: darkturquoise;
      background: ${({ colorful }) => (!colorful ? 'linear-gradient(-45deg, #414141, #414141, #414141, #414141)' : '-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB')};
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

