import logo from '../img/logo.svg';

function Logo() {
  return (
    <a className='logo' href="#logo" aria-label='logo'>
      <img src={logo} alt='logo DEN clinik' width={114} height={50} />
    </a>
  )
}

export default Logo;