import '../sass/LinkListItem.scss';

function LinkListItem(props) {
  return (
    <li className='item'>
      <a className='item__link' href={props.path}>{props.text}</a>
    </li>
  )
}

export default LinkListItem;