import {NavigationItem} from "./NavigationItem.js";

function Navigation({onCloseClick}) {
  const ITEMS = [
    {
      name: 'Про клініку',
      path: '#about',
      isExpandable: false
    },
    {
      name: 'Наші послуги',
      path: '#services',
      isExpandable: true
    },
    {
      name: 'Прайс',
      path: '#price',
      isExpandable: false
    },
    {
      name: 'Наші лікарі',
      path: '#doctors',
      isExpandable: false
    },
    {
      name: 'Акції',
      path: '#promotions',
      isExpandable: false
    }
  ];

  return (
    <nav className="navigation active">
      <h2 className='visually-hidden'>For SEO</h2>
      <ul className="navigation__list">
        {ITEMS.map((el, i) => (
          <NavigationItem
            key={i}
            name={el.name}
            path={el.path}
            isExpandable={el.isExpandable}
            handelOnCloseClick={onCloseClick}
          />
        ))}
      </ul>
    </nav>
  )
}

export default Navigation;