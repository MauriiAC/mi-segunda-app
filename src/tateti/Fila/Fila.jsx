import { Cuadrado } from "../Cuadrado/Cuadrado"

export const Fila = ({cuadrados, handleClick}) => {

  const renderCuadrado = (i) => {
    return (
      <Cuadrado 
        value={cuadrados[i]}
        onClick={() => handleClick(i)}
      />
    )
  }

  return (
    <div className="fila">
      {renderCuadrado(0)}
      {renderCuadrado(1)}
      {renderCuadrado(2)}
    </div>
  )
}
