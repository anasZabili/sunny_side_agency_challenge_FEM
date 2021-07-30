import styled from "styled-components";
import HeaderImage from "../../images/desktop/image-header.jpg";
import Navbar from "../Navbar";

const HeaderView = styled.div`
  /* take all the column inside the grid */
  grid-column: 1 / 3;
  background: url(${HeaderImage});
  background-size: contain;
  /* background-repeat: ; */
  height: 800px;
`;

const Header = () => {
  return (
    <HeaderView>
      <Navbar />
    </HeaderView>
  );
};

export default Header;
