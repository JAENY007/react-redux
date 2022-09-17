import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LocateToDoListButton = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate('/todo');
  };

  return <StyledButton onClick={handleClickButton}>투두리스트</StyledButton>;
};

export default LocateToDoListButton;

const StyledButton = styled.button`
  padding: 0.4rem;
  background: #b75ce8;
  color: #fff;
  border: none;
  border-radius: 0.6rem;
  font-size: 1rem;
  font-weight: 600;

  :hover {
    cursor: pointer;
  }
`;
