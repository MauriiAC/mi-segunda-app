import { useState } from "react"
import { Puntaje } from "./Puntaje/Puntaje"
import { Tablero } from "./Tablero/Tablero"
import './Tateti.css'

export const Tateti = () => {
  
  const [score, setScore] = useState({
    player1: 0, 
    player2: 0
  })
  const [playing, setPlaying] = useState(false)

  const [lastGameDate, setLastGameDate] = useState()

  const setWinner = ( player ) => {
    setScore({...score, [player]: score[player]+1})
  }
  
  return (
    <div className="tateti-container">
      <Tablero setWinner={setWinner} playing={playing} setPlaying={setPlaying} setLastGameDate={setLastGameDate}/>
      <Puntaje score={score} lastGameDate={lastGameDate}/>
    </div>
  )
}
