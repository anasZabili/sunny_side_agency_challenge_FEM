import styled from "styled-components";

const Card = styled.div`
  /* set color based on props */
  background-image: ${(props) => {
    if (props.backgroundImage) {
      return `url(${props.backgroundImage})`;
    }
    return "none";
  }};
  height: 600px;
`;

const ContentCard = ({ title, content, backgroundImage }) => {
  return (
    <Card backgroundImage={backgroundImage}>
      <h1>Content Card</h1>
    </Card>
  );
};

export default ContentCard;
