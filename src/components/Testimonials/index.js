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

const EmployeeName = styled.h3`
  font-family: "Fraunces", sans-serif;
  padding-bottom: -30px;
  color: hsl(212, 27%, 19%);
  margin-top: 0;
  margin-bottom: 8px;
`;

const EmployeePosition = styled.p`
  font-size: 0.9em;
  color: hsl(210, 4%, 67%);
  margin: 0;
  font-family: "barlow", sans-serif;
`;

const Testimonials = ({
  avatarImg,
  bodyContent,
  employeeName,
  employeePosition,
}) => {
  return (
    <TestimonialsCard>
      <Avatar src={avatarImg} />
      <Body>{bodyContent}</Body>
      <EmployeeName>{employeeName}</EmployeeName>
      <EmployeePosition>{employeeName}</EmployeePosition>
    </TestimonialsCard>
  );
};

export default Testimonials;
