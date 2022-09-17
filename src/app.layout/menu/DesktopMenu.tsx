import LoginButton from 'app.component/buttons/LoginButton';
import LogoutButton from 'app.component/buttons/LogoutButton';
import SignUpButton from 'app.component/buttons/SignUpButton';
import styled from 'styled-components';

const DesktopMenu = () => {
  return (
    <ListWrapper>
      <li>{<LoginButton />}</li>
      <li>{<SignUpButton />}</li>
    </ListWrapper>
  );
};

export default DesktopMenu;

const ListWrapper = styled.ol`
  display: flex;
`;
