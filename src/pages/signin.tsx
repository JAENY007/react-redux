import styled from 'styled-components';
import LoginForm from 'app.component/authForm/LoginForm';

const SignIn = () => {
  return (
    <StyledSection>
      <h2 className="page-title">로그인</h2>
      <LoginForm />
    </StyledSection>
  );
};

export default SignIn;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .page-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
`;
