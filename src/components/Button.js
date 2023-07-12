import '../sass/Button.scss';

function Button(props) {
  return (
  <a className='button' onClick={props.onClick} href={props.path} target='_blank'>
    {props.text}
  </a>
  )
}

export default Button;