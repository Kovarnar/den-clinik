import "../sass/BurgerMenu.scss";

function BurgerMenu( {onClick} ) {
  return (
    <div className="burger-menu" onClick={onClick}>
      <span className="burger-menu__item"></span>
      <span className="burger-menu__item"></span>
      <span className="burger-menu__item"></span>
    </div>
  )
};

export default BurgerMenu;