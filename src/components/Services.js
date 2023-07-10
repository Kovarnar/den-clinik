import ServiceCard from './ServiceCard';
import '../sass/Services.scss';

function Services() {
  const CARDS = [
    {
      text: "Ліцензія на стоматологічну практику",
      path: "#link"
    },
    {
      text: "Медичний персонал стоматології",
      path: "#link"
    },
    {
      text: "Реєстрація стомат-бізнесу",
      path: "#link"
    }
  ]
  return (
    <section className='services'>
      <div className='container'>
        {CARDS.map((el, i) => (
          <ServiceCard key={i} text={el.text} path={el.path} />
        ))}
      </div>
    </section>
  )
};

export default Services;