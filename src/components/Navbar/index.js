import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
`;

const Title = styled.h1`
  font-size: 2em;
  color: white;
  font-family: "Barlow", sans-serif;
`;

const Button = styled.button`
  margin-left: 10px;
  /* move out the decoration */
  border: none;
  background: none;

  padding: 10px;
  background-color: #00b0ff;
  color: white;
`;

const Navbar = () => {
  return (
    <Wrapper>
      <Title>sunnyside</Title>
      <Button>About</Button>
    </Wrapper>
  );
};

export default Navbar;
