import { useNavigate } from 'react-router-dom';

const LoginButton = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate('/signin');
  };

  return <button onClick={handleClickButton}>로그인</button>;
};

export default LoginButton;
