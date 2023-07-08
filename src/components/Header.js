import Logo from './Logo';
import Socials from './Socials';
import Button from './Button';

import '../sass/Header.scss';

function Header() {
  return (
    <header className='header'>
      <div className="container">
        <Logo />
        <Socials />
        <Button text="Замовити дзвінок" />
      </div>
    </header>
  )
}

export default Header;