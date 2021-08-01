import styled from "styled-components";

const TestimonialsCard = styled.div`
  /* center this div vertically */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: auto;
  width: 100%;
  height: 100%;
`;

const Avatar = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;

const Body = styled.p`
  font-family: "barlow", sans-serif;
  color: hsl(232, 10%, 55%);
  margin: 60px 10px;
  line-height: 1.8;
`;

const Testimonials = ({ avatarImg, bodyContent }) => {
  return (
    <TestimonialsCard>
      <Avatar src={avatarImg} />
      <Body>{bodyContent}</Body>
    </TestimonialsCard>
  );
};

export default Testimonials;
