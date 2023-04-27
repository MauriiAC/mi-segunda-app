import { Cuadrado } from "../Cuadrado/Cuadrado"

export const Fila = ({cuadrados, handleClick, positions, handleContextMenu}) => {

  const renderCuadrado = (i) => {
    return (
      <Cuadrado 
        value={cuadrados[i]}
        onClick={() => handleClick(i)}
      />
    )
  }

  return (
    <div onContextMenu={handleContextMenu} className="fila">
      {
        positions.map( position => (
          renderCuadrado( position )
        ))
      }
    </div>
  )
}
