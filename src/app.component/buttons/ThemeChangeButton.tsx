import styled from 'styled-components';

const ThemeChangeButton = () => {
  const toggle = document.querySelector('.toggleSwitch');
  const handleClickToggle = () => {
    toggle?.classList.toggle('active');
  };

  return (
    <StyledWrapper>
      <label
        htmlFor="toggle"
        className="toggleSwitch"
        onClick={handleClickToggle}
      >
        <span className="toggleButton"></span>
      </label>
    </StyledWrapper>
  );
};

export default ThemeChangeButton;

const StyledWrapper = styled.div`
  .toggleSwitch {
    width: 6rem;
    height: 3rem;
    display: block;
    position: relative;
    border-radius: 2rem;
    background-color: #fff;
    box-shadow: 0 0 1rem 3px rgba(0 0 0 / 15%);
    cursor: pointer;
  }

  .toggleSwitch .toggleButton {
    width: 2.6rem;
    height: 2.6rem;
    position: absolute;
    top: 50%;
    left: 0.2rem;
    transform: translateY(-50%);
    border-radius: 50%;
    background: #f03d3d;
  }

  /* 체크박스가 체크되면 변경 이벤트 */
  .toggleSwitch.active {
    background: #f03d3d;
  }

  .toggleSwitch.active .toggleButton {
    left: calc(100% - 2.8rem);
    background: #fff;
  }

  .toggleSwitch,
  .toggleButton {
    transition: all 0.2s ease-in;
  }
`;
