import NavigationItem from "./NavigationItem"

import "../sass/Navigation.scss";

function Navigation() {
  const items = [
    {
      name: 'Про клініку',
      path: '#about'
    },
    {
      name: 'Наші послуги',
      path: ''
    },
    {
      name: 'Прайс',
      path: '#price'
    },
    {
      name: 'Наші лікарі',
      path: '#doctors'
    },
    {
      name: 'Акції',
      path: '#promotions'
    }
  ];

  return (
    <nav className="navigation">
      <h2 className='visually-hidden'>For SEO</h2>
      <ul className="navigation__list">
        {items.map((el, i) => (
          <NavigationItem key={i} name={el.name} path={el.path} />
        ))}
      </ul>
    </nav>
  )
}

export default Navigation;