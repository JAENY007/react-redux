import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LoginButton = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate('/signin');
  };

  return (
    <StyledButton onClick={handleClickButton}>로그인 / 회원가입</StyledButton>
  );
};

export default LoginButton;

const StyledButton = styled.button`
  padding: 0.4rem;
  background: #cd8eee;
  color: #fff;
  border: none;
  border-radius: 0.6rem;
  font-size: 1rem;
  font-weight: 600;

  :hover {
    cursor: pointer;
  }
`;
