import Logo from './Logo';
import Navigation from './Navigation';
import {NavigationItem} from './NavigationItem';
import Socials from './Socials';

import '../sass/Footer.scss';

function Footer() {

  return (
    <footer className='footer'>
      <div className="container">
        <Logo />
        <Navigation className="footer__navigation" />
        <Socials />
        <ul className='footer__list'>
          <NavigationItem name="Ліцензії" path="#licenses" />
          <NavigationItem name="Політика конфіденційності" path="#privacy" />
        </ul>
      </div>
    </footer>
  )
}

export default Footer;