// import React , { Component } from 'react';
// import ReactDOM from 'react-dom';

// import '../style.css';

// class Square extends React.Component {
//   render() {
//     const {index,squares,handleClick} = this.props;      
//     return (
//       <button className="square" onClick={() =>handleClick(index)}>
//         {squares[index]}
//       </button>
//     );
//   }
// }

// class Board extends React.Component {
//   renderSquare(i) {
//     return <Square handleClick={this.props.handleClick} index={i} squares={this.props.squares}/>;
//   }

//   render() {  

//     return (
//       <div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// }

// class Game extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//     this.state = {
//       xIsNext:true,
//       history:[
//         {
//           squares:Array(9).fill(null)
//         }
//       ],
//       step:0,
//     }
//   }

//   handleClick(i) {
//     const {xIsNext,step} = this.state;
//     const history = this.state.history.slice(0,step+1);
//     let squares =history[step].squares.slice() ;
//     const winner = calculateWinner(squares);
//     if(winner || squares[i]) {
//       return;
//     }
//     squares[i] = xIsNext? 'x':'o';
//     this.setState({
//       xIsNext:!xIsNext,
//       history:history.concat([
//         {
//           squares:squares
//         }
//       ]),
//       step:step+1,
//     })
//   }
//   moveTo(index) {
//     this.setState({
//       step:index,
//       xIsNext:index%2 ===0,
//     })
//   }
//   render() {
//     const {history,step,xIsNext} = this.state;
//     let squares = history[step].squares;
//     const winner = calculateWinner(squares);
//     const status = 'Next player:'+(xIsNext?'x':'o');
//     const moves = history.map((h,index)=>{
//       let liDom;
//       liDom = index?("step:"+index):"start the game";
//       return <li onClick={()=>this.moveTo(index)} key={index+'index'}>{liDom}</li>
//     })
//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board 
//             handleClick={this.handleClick}
//             squares={squares} 
//           />
//         </div>
//         <div className="game-info">
//           <div>{winner?`the winner is ${winner}`:status }</div>
//           <ol>{moves}</ol>
//         </div>
//       </div>
//     );
//   }
// }

// // ========================================

// ReactDOM.render(
//   <Game />,
//   document.getElementById('root')
// );

// function calculateWinner(squares) {
//   const winnerIndex = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6]
//   ];
//   for(let i=0;i<winnerIndex.length;i++) {
//     const [a,b,c] = winnerIndex[i];
//     if(squares[a]&&squares[a]===squares[b]&&squares[a]===squares[c]){
//       return squares[a];
//     }
//   }
//   return null;
// }



//1：以下是temp.js修改后的代码，修改了之前直接操作history数组的元素（const item = {squares:[]};item.squares[index] = sth），
//导致每一次点击操作的都是同一个数组；2：修复了调用renderSquare时传入的index从1开始的bug，导致index变大，从而点击后面两个格子时数组长度变长
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../style.css';


function Square(props) {
  return <button className="square" onClick={() => props.handleClick(props.value)}>{props.squares[props.value]}</button>
}


class Board extends Component {
  renderSquare(i) {
    return <Square value={i} handleClick={this.props.handleClick} squares={this.props.squares} />
  }
  render() {
    return (
      <div>
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
    )
  }
}


class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      xIsNext: false,
      stepNumber: 0,
    }
  }
  handleClick(index) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const squares = history[history.length - 1].squares.slice();



    if (calculateWinner(squares) || squares[index]) {
      return;
    }
    squares[index] = this.state.xIsNext ? 'o' : 'x';
    this.setState((state) => {
      return {
        history: history.concat([
          {
            squares: squares
          }
        ]),
        xIsNext: !state.xIsNext,
        stepNumber: state.stepNumber + 1,
      }
    })
  }

  render() {
    const { history, xIsNext, stepNumber } = this.state;
    const squares = history[stepNumber].squares;
    let status;
    const winner = calculateWinner(squares)
    if (winner) {
      status = `the winner is ${winner}`;
    } else {
      status = ` Next player:${xIsNext ? 'o' : 'x'}`;
    }
    return (
      <div>
        <Board
          handleClick={this.handleClick.bind(this)}
          squares={squares} />
        <div className="game-info">
          <p>{status}</p>
          <div>
            {
              history.map((h, index) => {
                const desc = index ? `move to step: ${index}` : `start the game`;
                const step = <p key={index.toString()} data-index={index}
                  onClick={(e) => {
                    const itemIndex = e.target.dataset.index;
                    console.log(itemIndex)
                    this.setState({
                      stepNumber: index,
                      xIsNext: index % 2 === 0,
                    })
                  }}>{desc}</p>
                return step
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById("root")
);

function calculateWinner(squares) {
  const winArr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  for (let i = 0; i < winArr.length; i++) {
    const [a, b, c] = winArr[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      console.log(squares[a], 11111111)
      return squares[a];
    }
  }
  return null;
}




