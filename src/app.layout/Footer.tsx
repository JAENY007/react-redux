import ThemeChangeButton from 'app.component/buttons/ThemeChangeButton';
import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledFooter>
      <ThemeChangeButton />
      <strong>COPYRIGHT 2022. JAENY, All rights reserved</strong>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
