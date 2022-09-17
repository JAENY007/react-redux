import styled from 'styled-components';
import LoginButton from 'app.component/buttons/LoginButton';
import LocateToDoListButton from 'app.component/buttons/LocateToDoListButton';

const DesktopMenu = () => {
  return (
    <ListWrapper>
      <li>{<LocateToDoListButton />}</li>
      <li>{<LoginButton />}</li>
    </ListWrapper>
  );
};

export default DesktopMenu;

const ListWrapper = styled.ol`
  display: flex;
`;
