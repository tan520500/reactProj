import React , { Component } from 'react';
import ReactDOM from 'react-dom';

import '../style.css';


class Square extends React.Component {  
  render() {
    const {value,onClick} = this.props;
    return (
      <button className="square" onClick={ onClick}>
        { value }
      </button>
    );
  }
}

class Board extends React.Component {
  handleClick(index) {    
    this.props.handleClick(index);
  }
  renderSquare(i) {
    return (
      <Square 
      value={this.props.squares[i]}
      onClick={() =>{
        this.handleClick(i)
      }} />
    );
  }

  render() {
    const winner = this.props.calculateWinner(this.props.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.props.clicks ? 'X' : 'O');
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.calculateWinner = this.calculateWinner.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {     
      history:[{
        squares:Array(9).fill(null),
      }],
      clicks:true,
      stepNumber:0,
    }
  }
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      clicks: (step % 2) === 0,
    });
  }
  handleClick(index) {
    // const current = this.state.history[this.state.history.length - 1];
    const current = this.state.history[this.state.stepNumber];    
    const squares = current.squares.slice();
    const clicks = this.state.clicks;   
    if (this.calculateWinner(squares) || squares[index]) {
      return;
    }
    squares[index] = clicks ? 'X' : 'O';  
    this.setState((prev) => {
      const arr = prev.history.concat([{
        squares: squares,
      }])
      return {history:arr ,clicks:!prev.clicks,stepNumber:history.length,}
    });
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  render() {
    const history =this.state.history;
    const current = history[this.state.stepNumber];  
    const squares = current.squares;

    const moves = history.map((step,move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
    return (
      <li key={move.toString()}>
        <button onClick={() => this.jumpTo(move)} >{desc}</button>
      </li>
    )
    })
    return (
      <div className="game">
        <div className="game-board">
          <Board 
            handleClick={this.handleClick}
            squares = {squares} 
            clicks = {this.state.clicks}
            calculateWinner = {this.calculateWinner}
          />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);


