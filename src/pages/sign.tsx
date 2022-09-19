import AuthForm from 'app.layout/authForm/AuthForm';
import styled from 'styled-components';

const SignIn = () => {
  return (
    <StyledSection>
      <AuthForm />
    </StyledSection>
  );
};

export default SignIn;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
