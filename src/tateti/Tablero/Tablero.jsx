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


  return (
    <div className="tablero">
      <Fila cuadrados={cuadrados} handleClick={handleClick}/>
      <Fila cuadrados={cuadrados} handleClick={handleClick}/>
      <Fila cuadrados={cuadrados} handleClick={handleClick}/>
    </div>
  )

}
