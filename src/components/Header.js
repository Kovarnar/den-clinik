import Logo from './Logo';
import Socials from './Socials';
import Button from './Button';
import LinkListItem from './LinkListItem';
import Navigation from './Navigation';

import { HiOutlinePhone } from "react-icons/hi";

import '../sass/Header.scss';

function Header() {
  return (
    <header className='header'>
      <div className="header__top">
        <div className="container">
          <Logo />
          <ul className='header__list'>
            <LinkListItem text="м. Київ вул. Красноткацькая, 42" path="https://goo.gl/maps/YEkmZ43NRnHcuFyg8" />
            <LinkListItem text="м. Бровари вул. Героїв України, 28" path="https://goo.gl/maps/41Uh4iHSaUs8nBYK7" />
          </ul>
          <ul className='header__list'>
          <LinkListItem text="(095)251 01 11" path="tel:+80952510111" icon={<HiOutlinePhone className='icon' />} />
          <LinkListItem text="(098)251 01 11" path="tel:+80982510111" icon={<HiOutlinePhone className='icon' />} />
          </ul>
          <Socials />
          <Button text="Замовити дзвінок" />
        </div>
      </div>
      <div className="header__bottom">
        <div className="container">
          <Navigation />
        </div>
      </div>
    </header>
  )
}

export default Header;