import { FiChevronDown } from "react-icons/fi";
import '../sass/Accordion.scss';

function Accordion() {

const PRICE = [
  {
    title: 'Лікування зубів',
    id: 'id-1',
    content: [
      {
        name: 'Мікроінвазивне пломбування без використання бормашини',
        price: 550
      },
      {
        name: 'Склоіономерна пломба - середній карієс',
        price: 450
      },
      {
        name: 'Склоіономерна пломба - глибокий карієс',
        price: 550
      },
      {
        name: 'Фотополімерна пломба - початковий карієc ',
        price: 750
      }
    ]
  },
  {
    title: 'Видалення зуба (хірургія)',
    id: 'id-2',
    content: [
      {
        name: 'Послуга 1',
        price: 550
      },
      {
        name: 'Послуга 2',
        price: 450
      },
      {
        name: 'Послуга 3',
        price: 650
      },
      {
        name: 'Послуга 4',
        price: 750
      },
      {
        name: 'Послуга 5',
        price: 950
      }
    ]
  }
]

  return (
    <ul className='accordion'>
      {PRICE.map((el, i) => (
        <li className='accordion__item' key={i}>
          <input className='accordion__input' type='checkbox' id={el.id} />
          <label className='accordion__title  text text-light' for={el.id} >
            <span>{el.title}</span>
            <FiChevronDown className="icon" />
          </label>

          <ul className='accordion__content content'>
            {el.content.map((item, j) => (
              <li className='content__item  text text-dark' key={j}>
                <p className='content__service'>{item.name}</p>
                <span className='content__price'>{item.price} грн.</span>
            </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
};

export default Accordion;