import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  max-height: 220px;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;

export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  min-height: 670px;
  max-height: 670px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? "3rem" : "2rem")};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: "Droid Serif", serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.8rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const PrivateLinks = styled.a`
  svg {
    margin-left: 5px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: grey;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  border-radius: 10px;
  cursor: not-allowed;
`;

export const ExternalLinks = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: ${({ alt }) =>
    alt
      ? "linear-gradient(270deg, #F46737 0%, #945DD6 100%)"
      : "linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"};
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  border-radius: 10px;
  transition: 0.3s;
  svg {
    padding-left: 2px;
  }
  &:hover {
    transform: scale(1.05);
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: inline;
  }
`;
export const Tag = styled.li`
  padding-right: 10px;
  color: #d8bfbf;
  font-size: 1.5rem;
`;
