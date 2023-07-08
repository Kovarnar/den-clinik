import "../sass/NavigationItem.scss";

function NavigationItem(props) {
  return (
    <li className="navigation__item">
      <a className="navigation__link" href={props.path}>{props.name}</a>
    </li>
  )
}

export default NavigationItem;