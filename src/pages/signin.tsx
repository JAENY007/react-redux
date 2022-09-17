import styled from 'styled-components';
import AuthForm from 'app.component/authForm/AuthForm';

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
