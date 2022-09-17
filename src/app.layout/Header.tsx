import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import DesktopMenu from './menu/DesktopMenu';

const Header = () => {
  const navigate = useNavigate();

  const handleClickTitle = () => {
    navigate('/');
  };

  return (
    <StyledHeader>
      <h1 className="title" onClick={handleClickTitle}>
        새로운 To Do List App!
      </h1>
      <nav>
        <DesktopMenu />
      </nav>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 2.5rem;
    font-weight: 900;
    margin-bottom: 1rem;

    :hover {
      cursor: pointer;
    }
  }
`;
