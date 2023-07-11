import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import '../sass/Accordion.scss';

function Accordion() {

  const [openItems, setOpenItems] = useState(['id-1']);

  const toggleItem = (itemId) => {
    if (openItems.includes(itemId)) {
      setOpenItems(openItems.filter((item) => item !== itemId));
    } else {
      setOpenItems([...openItems, itemId]);
    }
  };

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
          <input className='accordion__input'
                type='checkbox'
                id={el.id}
                checked={openItems.includes(el.id)}
                onChange={() => toggleItem(el.id)}
          />
          <label
                className={`accordion__title text text-light ${openItems.includes(el.id) ? 'open' : ''}`}
                for={el.id}
          >
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