import Title from "./Title";
import Image from "./Image";

import "../sass/About.scss";

function About() {

  const IMAGE = {
    src1: require('../img/clinik.webp'),
    src2: require('../img/clinik@2x.webp'),
    src3: require('../img/clinik@3x.webp'),
    src4: require('../img/clinik.jpg'),
    alternative: 'сучасна клініка',
    width: 588,
    height: 523
  }

  return (
    <section className="about">
      <div className="container">
        <div className="header__content">
          <Title title="Про клініку" />
          <p className="about__text text text-dark">Ми професійно і комплексно вирішуємо всі випадки, пов'язані з зубами і порожниною рота, при розумному співвідношенні ціни і якості отримуваних послуг, для всіх членів вашої родини. Завдяки високому професіоналізму і чуйності наших лікарів, Ви не будете відчувати болю під час лікування. Ми використовуємо найкращі анестетики і перед уколом місцеву анестезію, обробляємо спеціальним кремом місце для уколу.</p>
          <Title title="Боїшся стомалогів?" />
        </div>
        <Image src1={IMAGE.src1} src2={IMAGE.src2} src3={IMAGE.src3} src4={IMAGE.src4}
              alternative={IMAGE.alternative} width={IMAGE.width} height={IMAGE.height} />
      </div>
    </section>
  )
}

export default About;