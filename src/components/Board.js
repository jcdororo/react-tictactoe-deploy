import React, { useState } from 'react'
import Square from './Square'
import "./Board.css"

const Board = () =>{

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xisNext, setXIsNext] = useState(true);

  const status = `Next player: ${xisNext ? 'X' : 'O'}`;
  const handleCLick = (i) => {
    const newSquares = squares.slice();
    newSquares[i] = xisNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xisNext);
  }

  const renderSqueare = (i) => {
    return <Square value={squares[i]} 
      onClick={() => handleCLick(i)} />
  }

  
  return (
    <div>
      <div className='status'>{status}</div>
      <div className='board-row'>
        {renderSqueare(0)}
        {renderSqueare(1)}
        {renderSqueare(2)}
      </div>
      <div className='board-row'>
        {renderSqueare(3)}
        {renderSqueare(4)}
        {renderSqueare(5)}
      </div>
      <div className='board-row'>
        {renderSqueare(6)}
        {renderSqueare(7)}
        {renderSqueare(8)}
      </div>
    </div>
  )
}


export default Board

