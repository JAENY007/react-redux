import styled from 'styled-components';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutaitonSignIn } from 'root.modules/auth/useMutationSignIn';
import { useMutaitonSignUp } from 'root.modules/auth/useMutationSignUp';
import { useDispatch } from 'react-redux';

const AuthForm = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const ageInputRef = useRef<HTMLInputElement>(null);
  const [isLogin, setIsLogin] = useState(true);

  const { data: tokenData, mutate: mutateSignIn } = useMutaitonSignIn();
  const { mutate: mutateSignUp } = useMutaitonSignUp();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginFormSubmit = async (event: any) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current?.value;
    const enteredPassword = passwordInputRef.current?.value;
    const enteredName = nameInputRef.current?.value;
    const enteredAge = Number(ageInputRef.current?.value);

    const loginForm = {
      email: enteredEmail,
      password: enteredPassword,
    };

    const registerForm = {
      name: enteredName,
      ...loginForm,
      age: enteredAge,
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
      <hr className="divider" />
      <div className="login-form">
        {!isLogin && (
          <>
            <div className="form-input">
              <label htmlFor="name">이름</label>
              <input type="text" id="name" required ref={nameInputRef} />
            </div>
            <div className="form-input">
              <label htmlFor="age">나이</label>
              <input type="number" id="age" required ref={ageInputRef} />
            </div>
          </>
        )}
        <div className="form-input">
          <label htmlFor="email">이메일</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className="form-input">
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
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
          <button className="signform-link" onClick={() => setIsLogin(false)}>
            회원가입
          </button>{' '}
          먼저 해주세요!
        </p>
      ) : (
        <p>
          아이디가 이미 있으신가요?{' '}
          <button className="signform-link" onClick={() => setIsLogin(true)}>
            로그인
          </button>{' '}
          해주세요!
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
  .divider {
    width: 80%;
    border-top: 2px solid #9e9e9e;
    margin: 0 0 1rem 0;
  }

  .login-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    .form-input {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;

      > input {
        width: calc(65% - 10px);
        padding: 0.3rem;
        border: 1.3px solid #9c9c9c;
        border-radius: 0.3rem;
      }
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
  .signform-link {
    background: transparent;
    color: #db9eff;
    font-size: 1rem;
    font-weight: 600;
    border: none;

    :hover {
      cursor: pointer;
      color: #ff9e9e;
    }
  }
`;
