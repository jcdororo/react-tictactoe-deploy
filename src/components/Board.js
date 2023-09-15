import React, { Component } from 'react'
import { Square } from './Square'
import "./Board.css"

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null)
    }
  }

  renderSqueare(i) {
    return <Square value={this.state.squares[i]}/>
  }

  render() {
    return (
      <div>
        <div className='status'>Next Player: X ,0</div>
        <div className='board-row'>
          {this.renderSqueare(0)}
          {this.renderSqueare(1)}
          {this.renderSqueare(2)}
        </div>
        <div className='board-row'>
          {this.renderSqueare(3)}
          {this.renderSqueare(4)}
          {this.renderSqueare(5)}
        </div>
        <div className='board-row'>
          {this.renderSqueare(6)}
          {this.renderSqueare(7)}
          {this.renderSqueare(8)}
        </div>
      </div>
    )
  }
}
