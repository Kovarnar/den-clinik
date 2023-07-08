import { FaTelegram } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaYoutube } from "react-icons/fa";

import '../sass/Socials.scss';

function Socials() {
  return (
    <ul className='socials'>
      <li className='socials__item'>
        <a className="socials__link" href="https://www.instagram.com/" aria-label='instagram' rel="noopener" >
          <PiInstagramLogoFill className='icon' />
        </a>
      </li>
      <li className='socials__item'>
        <a href="https://telegram.org/#" aria-label='telegram' rel="noopener" >
          <FaTelegram className='icon' />
        </a>
      </li>
      <li className='socials__item'>
        <a href="https://www.youtube.com/" aria-label='#youtube' rel="noopener" >
          <FaYoutube className='icon' />
        </a>
      </li>
    </ul>
  )
}

export default Socials;
