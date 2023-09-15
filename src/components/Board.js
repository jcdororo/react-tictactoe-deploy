import React, { useState } from 'react'
import Square from './Square'
import "./Board.css"

const Board = () =>{

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xisNext, setXIsNext] = useState(true);

  const calculateWinner = (squares) => {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a,b,c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(squares);
  let status;
  if(winner){
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xisNext? 'X' : 'O'}`;
  }

  
  const handleCLick = (i) => {
    const newSquares = squares.slice();

    if(calculateWinner(newSquares) || newSquares[i]) {
      return;
    }

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

