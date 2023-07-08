import Logo from './Logo';

import '../sass/Header.scss';

function Header() {
  return (
    <header className='header'>
      <div className="container">
        <Logo />
      </div>
    </header>
  )
}

export default Header;