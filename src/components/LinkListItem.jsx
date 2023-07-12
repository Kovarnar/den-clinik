import '../sass/LinkListItem.scss';

function LinkListItem(props) {
  return (
    <li className='item'>
      <a
        className='item__link'
        onClick={props.onClick}
        href={props.path}
        target={props.target}
      >
        {props.icon} {props.text}
      </a>
    </li>
  )
}

export default LinkListItem;