import { useState } from 'react';
import RadioItem from './RadioItem';
import "../sass/RarioQuize.scss";

function RadioQuize() {
  const QUIZE = [
    {
      name: 'fear',
      id: "answer-yes",
      value: "yes",
      text: "Так"
    },
    {
      name: 'fear',
      id: "answer-no",
      value: "no",
      text: "Ні"
    },
    {
      name: 'fear',
      id: "answer-so-s0",
      value: "so-so",
      text: "Боюсь мовчки"
    }
  ];

  const [value, setValue] = useState(false);

  const changes = () => setValue(!value);

  return (
    <div>
      {QUIZE.map((el, i) => (
        <RadioItem onClick={changes} key={i} name={el.name} id={el.id} value={el.value} text={el.text} />
      ))}
    </div>
  )
}

export default RadioQuize;