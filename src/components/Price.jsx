import Title from "./Title";
import Accordion from "./Accordion";
import "../sass/Price.scss";

function Price() {
  return (
    <section className="price" id="price">
      <div className="container">
        <Title title="Прайс" />
        <Accordion />
      </div>
    </section>
  )
}

export default Price;