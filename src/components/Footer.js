import Logo from './Logo';
import Socials from './Socials';
import LinkListItem from './LinkListItem';

import '../sass/Footer.scss';

function Footer() {

  return (
    <footer className='footer'>
      <div className="container">
        <Logo />
        <ul className='footer__list'>
          <LinkListItem text="Про клініку" path="#about" />
          <LinkListItem text="Наші послуги" path="#services" />
        </ul>
        <ul className='footer__list'>
          <LinkListItem text="Прайс" path="#price" />
          <LinkListItem text="Наші лікарі" path="#doctors" />
        </ul>
        <ul className='footer__list'>
          <LinkListItem text="Акції" path="#promotions" />
        </ul>
        <Socials />
        <ul className='footer__list'>
          <LinkListItem text="Ліцензії" path="#licenses" />
          <LinkListItem text="Політика конфіденційності" path="#privacy" />
        </ul>
      </div>
    </footer>
  )
}

export default Footer;