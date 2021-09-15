import Navigation from '../Navigation/Navigation';

import './Header.css';

function Header({ content }) {
  return (
    <header className="header">
      <img className={'header__logo'} src={content.header.logo} alt="logo" height="50" width="50" />

      <h1 className={'header__title'}>{content.header.title}</h1>

      <Navigation content={content.navigation} />
      {content.author}
    </header>
  );
}

export default Header;
