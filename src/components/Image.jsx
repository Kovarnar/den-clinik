import "../sass/Image.scss";

function Image(props) {
  return (
    <picture className='image'>
      <source media="(max-resolution: 1dppx)" srcSet={props.src1} />
      <source media="(max-resolution: 2dppx)" srcSet={props.src2} />
      <source media="(max-resolution: 3dppx)" srcSet={props.src3} />
      <img src={props.src4} alt={props.alternative} width={props.width} height={props.height} />
    </picture>
  )
}

export default Image;