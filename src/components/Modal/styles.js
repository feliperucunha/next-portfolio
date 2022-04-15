import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;

export const Div1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 5rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    grid-area: 1 / 1 / 2 / 3;
  }
`;

export const Span = styled.span`
  font-size: 5rem;
  color: black;
`;

export const StyledButton = styled.div`
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: black;
`;

