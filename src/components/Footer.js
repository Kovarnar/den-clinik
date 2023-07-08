import Logo from './Logo';
import Socials from './Socials';

import '../sass/Footer.scss';

function Footer() {
  return (
    <footer className='footer'>
      <div className="container">
        <Logo />
        <Socials />
      </div>
    </footer>
  )
}

export default Footer;