import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  padding: 10rem;
  z-index: 3;
  background-color: white;
  text-align: center;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LastContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  padding: 15rem;
  z-index: 3;
  background-color: transparent;
  text-align: center;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 5rem;
  }
`;

export const LastContainersContent = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    background-color: white;
    padding: 2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 2rem;
  }
`;

export const Div1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;
  overflow: hidden;
  border-radius: 10px;

  transition: 0.5s;
  :hover {
    transform: scale(1.02);
  }

  div {
    display: flex;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    img {
      padding: 1rem !important;
    }
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
      padding: .5em 2em;
      background: darkturquoise;
      background: ${({ colorful }) => (!colorful ? 'linear-gradient(-45deg, #414141, #414141, #414141, #414141)' : '-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB')};
      background-size: 400% 400%;
      border-radius: 10px;
      
      a {
        color: white;
      }
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
  padding-bottom: 2rem;
  color: black;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 3rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 2rem;
  }
`;

export const StyledButton = styled.div`
  padding-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 2rem;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 1.6rem;
  }
`;

