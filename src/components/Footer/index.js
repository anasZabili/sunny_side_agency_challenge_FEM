import styled from "styled-components";
import { Link } from "react-router-dom";
import MilkImage from "../../images/desktop/image-gallery-milkbottles.jpg";
import ConeImage from "../../images/desktop/image-gallery-cone.jpg";
import SugarImage from "../../images/desktop/image-gallery-sugarcubes.jpg";
import OrangeImage from "../../images/desktop/image-gallery-orange.jpg";
import IconPinterest from "../../images/icon-pinterest.svg";
import IconFacebook from "../../images/icon-facebook.svg";
import IconTwitter from "../../images/icon-twitter.svg";
import InconInstagram from "../../images/icon-instagram.svg";

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: 60% 40%;
  height: 700px;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  color: hsl(168, 34%, 70%);
  margin: 60px 15px 15px 5px;
`;

const MentionView = styled.div`
  grid-column: 1 / 5;
  background: hsl(168, 34%, 70%);
  width: 100%;
  height: 100%;
  color: hsl(167, 40%, 24%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 2em;
  /* color:  hsl(167, 40%, 24%) */
  font-family: "Barlow", sans-serif;
`;

const StyledLink = styled(Link)`
  font-size: 0.9em;
  margin: 20px;
  font-family: "barlow", sans-serif;
  text-decoration: none;
  color: hsl(167, 40%, 24%);
`;

const Footer = () => {
  return (
    <Grid>
      <Image src={MilkImage} />
      <Image src={OrangeImage} />
      <Image src={ConeImage} />
      <Image src={SugarImage} />
      <MentionView>
        <Title>sunnyside</Title>
        <div>
          <StyledLink to="/">About</StyledLink>
          <StyledLink to="/">Services</StyledLink>
          <StyledLink to="/">Projects</StyledLink>
        </div>
        <div>
          <Icon src={IconPinterest} />
          <Icon src={IconFacebook} />
          <Icon src={IconTwitter} />
          <Icon src={InconInstagram} />
        </div>
      </MentionView>
    </Grid>
  );
};

export default Footer;
