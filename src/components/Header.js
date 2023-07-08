import Logo from './Logo';
import Socials from './Socials';

import '../sass/Header.scss';

function Header() {
  return (
    <header className='header'>
      <div className="container">
        <Logo />
        <Socials />
      </div>
    </header>
  )
}

export default Header;