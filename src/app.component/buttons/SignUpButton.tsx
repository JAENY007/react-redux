import { useNavigate } from 'react-router-dom';

const SignUpButton = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate('/signup');
  };

  return <button onClick={handleClickButton}>회원가입</button>;
};

export default SignUpButton;
