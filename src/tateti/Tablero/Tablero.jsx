import { useState } from "react"
import './Tablero.css'
import { Fila } from "../Fila/Fila"


export const Tablero = ( {setWinner, playing, setPlaying, setLastGameDate} ) => {
  
  const [cuadrados, setCuadrados] = useState(Array(9).fill("."))
  const [turno, setTurno] = useState("X")
  
  const handleClick = (i) => {
    const nuevosCuadrados = [...cuadrados]
    nuevosCuadrados[i] = turno
    setCuadrados(nuevosCuadrados)
    setTurno(turno === 'X' ? 'O' : 'X')
  }

  const handleMouseEnter = () => {
    // console.log('dentro del tablero')
  }  
  
  const handleMouseLeave = () => {
    // console.log('salió del tablero')
  }

  const handleContextMenu = (e) => {
    e.preventDefault()
    // console.log('se hizo click derecho')
  }

  const onStart = () => {
    setPlaying(true)
    setLastGameDate(new Date())
  }

  const onFinish = () => {
    setPlaying(false)
    setCuadrados(Array(9).fill("."))
  }

  return (
    <>
    {
      playing
      ?
      <div>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="tablero">
        <Fila handleContextMenu={handleContextMenu} cuadrados={cuadrados} handleClick={handleClick} positions={[0,1,2]}/>
        <Fila handleContextMenu={handleContextMenu} cuadrados={cuadrados} handleClick={handleClick} positions={[3,4,5]}/>
        <Fila handleContextMenu={handleContextMenu} cuadrados={cuadrados} handleClick={handleClick} positions={[6,7,8]}/>
      </div>
      <div>
        <button onClick={() => setWinner('player1')}> Gana Player 1 </button>
        <button onClick={() => setWinner('player2')}> Gana Player 2 </button>
      </div>
      <button onClick={onFinish}>
        Finalizar
      </button>
      </div>
      :
      <button onClick={onStart}>
        Comenzar
      </button>
    }
    </>
  )

}
