import Logo from './Logo';
import Socials from './Socials';
import Button from './Button';
import LinkListItem from './LinkListItem';
import Navigation from './Navigation';
import BurgerMenu from './BurgerMenu';
import { HiOutlinePhone } from "react-icons/hi";
import '../sass/Header.scss';

function Header() {
  return (
    <header className='header'>
      <BurgerMenu />

      <div className="header__top">
        <div className="container">
          <Logo />
          <div className='header__contacts'>
            <ul className='header__list'>
              <LinkListItem text="м. Київ вул. Красноткацькая, 42" path="https://goo.gl/maps/YEkmZ43NRnHcuFyg8" />
              <LinkListItem text="м. Бровари вул. Героїв України, 28" path="https://goo.gl/maps/41Uh4iHSaUs8nBYK7" />
            </ul>
            <ul className='header__list'>
              <LinkListItem text="(095)251 01 11" path="tel:+80952510111" icon={<HiOutlinePhone className='icon' />} />
              <LinkListItem text="(098)251 01 11" path="tel:+80982510111" icon={<HiOutlinePhone className='icon' />} />
            </ul>
            <Socials />
            <Button text="Замовити дзвінок" path="https://www.google.com/search?q=%D1%84%D0%BE%D1%82%D0%BE+%D0%BA%D0%BE%D1%82%D0%B8%D0%BA%D1%96%D0%B2&tbm=isch&source=univ&fir=hKBJ9sGHxErJmM%252CKrShES_nGe-8rM%252C_%253BU65bYi6BR6Jg7M%252CtYqn-NuLsOF4GM%252C_%253B266WyAjQH2pb3M%252CxX-9i6z5CYbciM%252C_%253BQ6B5xoFBhcg_7M%252Ck078uiO8ukz3BM%252C_%253BYaJ5j5JrEZaa0M%252C-xCKAOLxmzoJ2M%252C_%253B9rr5M4gJijwMvM%252CHbrY2X5wCb2zrM%252C_%253BCYphdGuvkkmQGM%252C4Ut6y8G8hfLezM%252C_%253B2kXi1mqQJMN3wM%252Cl9pHAN0mrp-iYM%252C_%253BF1NwuMcZOiqb2M%252CcefHKFvXZhaKDM%252C_%253B9Wi_qZL-K7TyiM%252CEdwkHhTGCVgpXM%252C_%253B7D2jVxAX2MSGuM%252C4Ut6y8G8hfLezM%252C_%253B4ZZtUziEmdEskM%252CQYbD1WW-TvOoHM%252C_%253BdwSBszPnpohi2M%252CXHBcaq-cN4eZAM%252C_%253B4CXHdZEUAQq2TM%252C2O-QuiRq72qCVM%252C_%253BTSLexyX6A5K0jM%252ConEbcWSoAFzc9M%252C_&usg=AI4_-kTw0VP2cFcJierWiH2evFZY7zVa8w&sa=X&ved=2ahUKEwiu-dLHq4KAAxUPuosKHd7nBykQjJkEegQIFhAC&biw=1536&bih=714&dpr=1.25" />
          </div>
        </div>
      </div>

      <div className="header__bottom">
        <div className="container">
          <div className="wrapper">
            <Navigation />
            <div className='header__contacts'>
              <ul className='header__list'>
                <LinkListItem text="м. Київ вул. Красноткацькая, 42" path="https://goo.gl/maps/YEkmZ43NRnHcuFyg8" />
                <LinkListItem text="м. Бровари вул. Героїв України, 28" path="https://goo.gl/maps/41Uh4iHSaUs8nBYK7" />
              </ul>
              <ul className='header__list'>
                <LinkListItem text="(095)251 01 11" path="tel:+80952510111" icon={<HiOutlinePhone className='icon' />} />
                <LinkListItem text="(098)251 01 11" path="tel:+80982510111" icon={<HiOutlinePhone className='icon' />} />
              </ul>
              <Socials />
              <Button text="Замовити дзвінок" path="https://www.google.com/search?q=%D1%84%D0%BE%D1%82%D0%BE+%D0%BA%D0%BE%D1%82%D0%B8%D0%BA%D1%96%D0%B2&tbm=isch&source=univ&fir=hKBJ9sGHxErJmM%252CKrShES_nGe-8rM%252C_%253BU65bYi6BR6Jg7M%252CtYqn-NuLsOF4GM%252C_%253B266WyAjQH2pb3M%252CxX-9i6z5CYbciM%252C_%253BQ6B5xoFBhcg_7M%252Ck078uiO8ukz3BM%252C_%253BYaJ5j5JrEZaa0M%252C-xCKAOLxmzoJ2M%252C_%253B9rr5M4gJijwMvM%252CHbrY2X5wCb2zrM%252C_%253BCYphdGuvkkmQGM%252C4Ut6y8G8hfLezM%252C_%253B2kXi1mqQJMN3wM%252Cl9pHAN0mrp-iYM%252C_%253BF1NwuMcZOiqb2M%252CcefHKFvXZhaKDM%252C_%253B9Wi_qZL-K7TyiM%252CEdwkHhTGCVgpXM%252C_%253B7D2jVxAX2MSGuM%252C4Ut6y8G8hfLezM%252C_%253B4ZZtUziEmdEskM%252CQYbD1WW-TvOoHM%252C_%253BdwSBszPnpohi2M%252CXHBcaq-cN4eZAM%252C_%253B4CXHdZEUAQq2TM%252C2O-QuiRq72qCVM%252C_%253BTSLexyX6A5K0jM%252ConEbcWSoAFzc9M%252C_&usg=AI4_-kTw0VP2cFcJierWiH2evFZY7zVa8w&sa=X&ved=2ahUKEwiu-dLHq4KAAxUPuosKHd7nBykQjJkEegQIFhAC&biw=1536&bih=714&dpr=1.25" />
            </div>
          </div>

        </div>
      </div>

      <div className="header__popup" id="popup"></div>
    </header>
  )
}

export default Header;