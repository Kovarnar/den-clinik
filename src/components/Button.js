import '../sass/Button.scss';

function Button(props) {
  return <a className='button' href={props.path}>{props.text}</a>
}

export default Button;