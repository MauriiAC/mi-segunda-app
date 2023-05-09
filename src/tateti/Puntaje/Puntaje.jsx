import React, { useMemo } from 'react'
import './Puntaje.css'

const calculateTime = (lastGameDate) => {
  console.log('Calculando el momento de la partinda')
  if (! (lastGameDate instanceof Date)) return
  const hour = lastGameDate.getHours()
  const minutes = lastGameDate.getMinutes()
  const seconds = lastGameDate.getSeconds()
  return `La partida comenzó a las ${hour}:${minutes}:${seconds}`
}


export const Puntaje = React.memo(({score, lastGameDate}) => {

  console.log('renderizando puntaje...')
  
  const {player1, player2} = score
  
  // const startTime = calculateTime(lastGameDate)
  const startTime = useMemo(() => calculateTime(lastGameDate), [lastGameDate])

  return (
    <div className="score-container">
      <h2>{startTime}</h2>
      <h4 className={`score ${player1 >= 5 ? 'winner': ''}`}>Player 1: <strong> {player1} </strong></h4>
      <h4 className={`score ${player2 >= 5 ? 'winner': ''}`}>Player 2: <strong> {player2} </strong></h4>
    </div>
  )
})

Puntaje.displayName = 'Puntaje'