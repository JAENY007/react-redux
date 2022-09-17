import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledFooter>
      <strong>COPYRIGHT 2022. JAENY, All rights reserved</strong>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
