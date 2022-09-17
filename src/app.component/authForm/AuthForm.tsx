import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutaitonSignIn } from 'root.modules/auth/useMutationSignIn';
import { useMutaitonSignUp } from 'root.modules/auth/useMutationSignUp';
import styled from 'styled-components';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const { mutate: mutateSignIn } = useMutaitonSignIn();
  const { mutate: mutateSignUp } = useMutaitonSignUp();
  const navigate = useNavigate();

  const handleChangeEmail = (event: any) => {
    setEmail(event.target.value);
  };
  const handleChangePassword = (event: any) => {
    setPassword(event.target.value);
  };
  const handleLoginFormSubmit = async (event: any) => {
    event.preventDefault();
    const loginForm = {
      email: email,
      password: password,
    };
    const registerForm = {
      name: 'JY',
      age: 20,
      ...loginForm,
    };
    if (isLogin) {
      await mutateSignIn(registerForm);
      navigate('/todo', { replace: true });
    } else {
      await mutateSignUp(registerForm);
      setIsLogin(true);
    }
  };

  return (
    <StyledLoginForm onSubmit={handleLoginFormSubmit}>
      <h2 className="page-title">{isLogin ? '로그인' : '회원가입'}</h2>
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
      <input
        className="submit-button"
        type="submit"
        value={isLogin ? '로그인' : '회원가입'}
      />
      {isLogin ? (
        <p>
          아이디가 없으신가요?{' '}
          <button onClick={() => setIsLogin(false)}>회원가입</button> 먼저
          해주세요!
        </p>
      ) : (
        <p>
          아이디가 이미 있으신가요?{' '}
          <button onClick={() => setIsLogin(true)}>로그인</button> 해주세요!
        </p>
      )}
    </StyledLoginForm>
  );
};

export default AuthForm;

const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .page-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .login-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 1rem;

    .form-input {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .submit-button {
    font-family: 'Cafe24SsurroundAir';
    font-size: 1rem;
    font-weight: 600;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: none;
    border-radius: 0.3rem;
    background: #ff9e9e;
    color: #fff;
  }
`;
