import { useState } from "react";
import "../sass/NavigationItem.scss";

export const NavigationItem = props => {
  const [subMenuActive, setSubMenuActive] = useState(false);

  return (
    <>
      {props.isExpandable ? (
        <li className="navigation__item">
          <div className={`expandable ${subMenuActive ? 'menu-active' : ''}`}>
            <div
              className="navigation__link"
              onClick={() => setSubMenuActive(!subMenuActive)}
            >
              {props.name}
            </div>
            <ul className="submenu">
              <li className="submenu__item" onClick={props.handelOnCloseClick}>
                <a className="submenu__link" href="#servise-1">
                  Послуга 1
                </a>
              </li>
              <li className="submenu__item" onClick={props.handelOnCloseClick}>
                <a className="submenu__link" href="#servise-1">
                  Послуга 2
                </a>
              </li>
              <li className="submenu__item" onClick={props.handelOnCloseClick}>
                <a className="submenu__link" href="#servise-1">
                  Послуга 3
                </a>
              </li>
            </ul>
          </div>
        </li>
      ) : (
        <li className="navigation__item" onClick={props.handelOnCloseClick}>
          <a className="navigation__link" href={props.path} >
              {props.name}
          </a>
        </li>
      )}
    </>
  );
}