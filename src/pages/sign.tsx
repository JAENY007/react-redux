import AuthForm from 'app.layout/authForm/AuthForm';
import styled from 'styled-components';

const Sign = () => {
  return (
    <StyledSection>
      <AuthForm />
    </StyledSection>
  );
};

export default Sign;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
