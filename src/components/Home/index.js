import styled from "styled-components";
import ContentCard from "../ContentCard";
import Header from "../Header";
import EggImage from "../../images/desktop/image-transform.jpg";
import GlassImage from "../../images/desktop/image-stand-out.jpg";
import CherryImage from "../../images/desktop/image-graphic-design.jpg";
import OrangeImage from "../../images/desktop/image-photography.jpg";
import Testimonials from "../Testimonials";
import EmilyImg from "../../images/image-emily.jpg";
import JennieImg from "../../images/image-jennie.jpg";
import ThomasImg from "../../images/image-thomas.jpg";

const Grid = styled.div`
  align-items: center;
  align-content: center;
  display: grid;
  /* set gap to 0 */
  grid-gap: 0;

  grid-template-columns: repeat(2, 1fr);
  /* grid-template-rows: 1.5fr 1fr 1fr 1fr; */
`;

const TestimonialsView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
  margin: 0px 120px;
`;

const Home = () => {
  return (
    <>
      <Grid>
        <Header />
        <ContentCard />
        <ContentCard backgroundImage={EggImage} />
        <ContentCard backgroundImage={GlassImage} />
        <ContentCard />
        <ContentCard backgroundImage={CherryImage} />
        <ContentCard backgroundImage={OrangeImage} />

        {/* About Services Projects Contact We are creatives Transform your brand We
      are a full-service creative agency specializing in helping brands grow
      fast. Engage your clients through compelling visuals that do most of the
      marketing for you. Learn more Stand out to the right audience Using a
      collaborative formula of designers, researchers, photographers,
      videographers, and copywriters, we’ll build and extend your brand in
      digital places. Learn more Graphic design Great design makes you
      memorable. We deliver artwork that underscores your brand message and
      captures potential clients’ attention. Photography Increase your
      credibility by getting the most stunning, high-quality photos that improve
      your business image. Client testimonials We put our trust in Sunnyside and
      they delivered, making sure our needs were met and deadlines were always
      hit. Emily R. Marketing Director Sunnyside’s enthusiasm coupled with their
      keen interest in our brand’s success made it a satisfying and enjoyable
      experience. Thomas S. Chief Operating Officer Incredible end result! Our
      sales increased over 400% when we worked with Sunnyside. Highly
      recommended! Jennie F. Business Owner About Services Projects Contact */}
      </Grid>
      <TestimonialsView>
        <Testimonials
          avatarImg={EmilyImg}
          bodyContent="We put our trust in Sunnyside and
      they delivered, making sure our needs were met and deadlines were always
      hit."
        />
        <Testimonials
          avatarImg={ThomasImg}
          bodyContent="Marketing Director Sunnyside’s enthusiasm coupled with their
      keen interest in our brand’s success made it a satisfying and enjoyable
      experience."
        />
        <Testimonials
          avatarImg={JennieImg}
          bodyContent="Incredible end result! Our
          sales increased over 400% when we worked with Sunnyside. Highly
          recommended!"
        />
      </TestimonialsView>
    </>
  );
};

export default Home;
