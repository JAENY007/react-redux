import { useState } from 'react';
import styled from 'styled-components';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = (event: any) => {
    setEmail(event.target.value);
  };
  const handleChangePassword = (event: any) => {
    setPassword(event.target.value);
  };
  const handleLoginFormSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <StyledLoginForm onSubmit={handleLoginFormSubmit}>
      <div className="login-form">
        <div className="form-input">
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            required
            onChange={handleChangeEmail}
          />
        </div>
        <div className="form-input">
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            required
            onChange={handleChangePassword}
          />
        </div>
      </div>
      <input type="submit" value="로그인" />
    </StyledLoginForm>
  );
};

export default LoginForm;

const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .login-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    .form-input {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
