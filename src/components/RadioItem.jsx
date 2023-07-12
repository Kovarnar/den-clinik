import '../sass/RadioItem.scss';

function RadioItem(props) {
  return (
    <div className="radio">
      <input className="radio-button"
            type="radio"
            name={props.name}
            id={props.id}
            value={props.value}
      />
      <label className="radio-lable text text-dark" for={props.id}>{props.text}</label>
    </div>

  )
}

export default RadioItem;