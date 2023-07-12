import { FaTelegram } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaYoutube } from "react-icons/fa";

import '../sass/Socials.scss';

function Socials(props) {
  return (
    <ul className='socials'>
      <li className='socials__item'>
        <a className="socials__link" href="https://www.instagram.com/" aria-label='instagram' rel="noopener, noreferrer" onClick={props.onClick} target="_blank">
          <PiInstagramLogoFill className='icon' />
        </a>
      </li>
      <li className='socials__item'>
        <a className="socials__link" href="https://telegram.org/#" aria-label='telegram' rel="noopener, noreferrer" onClick={props.onClick} target="_blank">
          <FaTelegram className='icon' />
        </a>
      </li>
      <li className='socials__item'>
        <a className="socials__link" href="https://www.youtube.com/" aria-label='#youtube' rel="noopener, noreferrer" onClick={props.onClick} target="_blank">
          <FaYoutube className='icon' />
        </a>
      </li>
    </ul>
  )
}

export default Socials;
