import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutaitonSignIn } from 'root.modules/auth/useMutationSignIn';
import { useMutaitonSignUp } from 'root.modules/auth/useMutationSignUp';
import { useDispatch } from 'react-redux';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [isLogin, setIsLogin] = useState(true);

  const { data: tokenData, mutate: mutateSignIn } = useMutaitonSignIn();
  const { mutate: mutateSignUp } = useMutaitonSignUp();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeEmail = (event: any) => {
    setEmail(event.target.value);
  };
  const handleChangePassword = (event: any) => {
    setPassword(event.target.value);
  };
  const handleChangeName = (event: any) => {
    setName(event.target.value);
  };

  const handleChangeAge = (event: any) => {
    setAge(Number(event.target.value));
  };
  const handleLoginFormSubmit = async (event: any) => {
    event.preventDefault();
    const loginForm = {
      email: email,
      password: password,
    };
    const registerForm = {
      name: name,
      ...loginForm,
      age: age,
    };
    if (isLogin) {
      await mutateSignIn(loginForm);
      sessionStorage.setItem('loginToken', tokenData?.token);
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
        {!isLogin && (
          <>
            <div className="form-input">
              <label htmlFor="name">이름</label>
              <input
                type="text"
                id="name"
                required
                onChange={handleChangeName}
              />
            </div>
            <div className="form-input">
              <label htmlFor="age">나이</label>
              <input
                type="number"
                id="age"
                required
                onChange={handleChangeAge}
              />
            </div>
          </>
        )}
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
      width: 100%;
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
