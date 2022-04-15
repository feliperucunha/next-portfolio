import styled from "styled-components";

export default styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  color: white;
  text-align: center;
  transition: all 300ms ease-in-out;
  gap: 10px;
  border-radius: 10px;
  transition: .2s;

  &:hover {
    color: aqua;
    transform: scale(1.1);
  }

  .icon {
    font-size: 60px;
  }

  p {
    font-size: 20px;
  }
`;
