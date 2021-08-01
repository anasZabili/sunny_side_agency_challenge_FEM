import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 20px;
  font-family: "Barlow", sans-serif;
`;

const Title = styled.h1`
  font-size: 2em;
  color: white;
  flex: 1;
`;

const StyledLink = styled(Link)`
  color: white;
  margin: 22px 0px;
  margin-right: 25px;
  text-decoration: none;
  padding: 10px;
`;

const StyledLinkButton = styled(StyledLink)`
  background-color: white;
  border-radius: 20px;
  color: hsl(198, 62%, 26%);
  padding: 10px 20px;
  font-family: "Fraunces", sans-serif;
`;

const Navbar = () => {
  return (
    <Wrapper>
      <Title>sunnyside</Title>
      <StyledLink path="about">About</StyledLink>
      <StyledLink path="about">Services</StyledLink>
      <StyledLink path="about">Projects</StyledLink>
      <StyledLinkButton path="about">Contact</StyledLinkButton>
    </Wrapper>
  );
};

export default Navbar;
