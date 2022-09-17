import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleClickButton = async () => {
    // await 로그아웃 로직
    navigate('/', { replace: true });
  };

  return <button>로그아웃</button>;
};

export default LogoutButton;
