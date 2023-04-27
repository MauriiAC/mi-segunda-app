
export const Cuadrado = (props) => {
  return (
    <button style={{width: "50px", height: "50px"}} className="cuadrado" onClick={props.onClick}>
      {props.value}
    </button>
  )
}
