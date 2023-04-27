import { useState } from "react"
import './Tablero.css'
import { Fila } from "../Fila/Fila"


export const Tablero = () => {
  
  const [cuadrados, setCuadrados] = useState(Array(9).fill("."))
  const [turno, setTurno] = useState("X")
  
  const handleClick = (i) => {
    const nuevosCuadrados = [...cuadrados]
    nuevosCuadrados[i] = turno
    setCuadrados(nuevosCuadrados)
    setTurno(turno === 'X' ? 'O' : 'X')
  }

  const handleMouseEnter = () => {
    console.log('dentro del tablero')
  }  
  
  const handleMouseLeave = () => {
    console.log('salió del tablero')
  }

  const handleContextMenu = (e) => {
    e.preventDefault()
    console.log('se hizo click derecho')
  }

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="tablero">
      <Fila handleContextMenu={handleContextMenu} cuadrados={cuadrados} handleClick={handleClick} positions={[0,1,2]}/>
      <Fila handleContextMenu={handleContextMenu} cuadrados={cuadrados} handleClick={handleClick} positions={[3,4,5]}/>
      <Fila handleContextMenu={handleContextMenu} cuadrados={cuadrados} handleClick={handleClick} positions={[6,7,8]}/>
    </div>
  )

}
