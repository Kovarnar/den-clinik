import { useState } from "react";
import "../sass/NavigationItem.scss";

function NavigationItem(props) {
  const [subMenuActive, setSubMenuActive] = useState(false);

  const handleClick = () => {
    setSubMenuActive(!subMenuActive);
  };

  return (
    <li className="navigation__item">
      {!props.isExpandable ? (
        <a className="navigation__link" href={props.path}>
          {props.name}
        </a>
      ) : (
        <div className={`expandable ${subMenuActive ? 'menu-active' : ''}`}>
          <div className="navigation__link" onClick={handleClick}>
            {props.name}
          </div>
          <ul className="submenu">
            <li className="submenu__item">
              <a className="submenu__link" href="#servise-1">
                Послуга 1
              </a>
            </li>
            <li className="submenu__item">
              <a className="submenu__link" href="#servise-1">
                Послуга 2
              </a>
            </li>
            <li className="submenu__item">
              <a className="submenu__link" href="#servise-1">
                Послуга 3
              </a>
            </li>
          </ul>
        </div>
      )}
    </li>
  );
}

export default NavigationItem;



// import { useState } from "react";
// import "../sass/NavigationItem.scss";

// function NavigationItem(props) {

//   const [subMenu, setSubMenu] = useState(false);


//   return (
//     <li className="navigation__item">
//       {
//         !props.isExpandable ?
//         <a className="navigation__link" href={props.path}>{props.name}</a>
//         :
//           <div className='expandable'>
//             <div
//                   className='navigation__link'
//             >{props.name}</div>
//             <ul className='submenu'>
//               <li className="submenu__item">
//                 <a className="submenu__link" href="#servise-1">Послуга 1</a>
//               </li>
//               <li className="submenu__item">
//                 <a className="submenu__link" href="#servise-1">Послуга 2</a>
//               </li>
//               <li className="submenu__item">
//                 <a className="submenu__link" href="#servise-1">Послуга 3</a>
//               </li>
//             </ul>
//           </div>
//       }
//     </li>
//   )
// }

// export default NavigationItem;