import LoginButton from 'app.component/LoginButton';

const Header = () => {
  return (
    <header>
      <h1>새로운 To Do List App!</h1>
      <div>{<LoginButton />}</div>
    </header>
  );
};

export default Header;
