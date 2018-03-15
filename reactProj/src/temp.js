// import React , { Component } from 'react';
// import ReactDOM from 'react-dom';

// import '../style.css';


// function Square(props) {
//   return <button className="square" onClick={() => props.handleClick(props.value)}>{props.squares[props.value]}</button>
// }


// class Board extends Component {
//   renderSquare(i) {
//     return <Square value={i} handleClick={this.props.handleClick} squares={this.props.squares} />
//   }
//   render() {
//     return(
//       <div>
//         <div className="board-row">
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//           {this.renderSquare(3)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//           {this.renderSquare(6)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//           {this.renderSquare(9)}
//         </div>
//       </div>
//     )
//   }
// }


// class Game extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       history:[
//         {
//         squares:Array(9).fill(null)
//       }
//     ],
//       xIsNext:false,
//       stepNumber:0,
//     }
//   }
//   handleClick(index) {
//     const history = this.state.history.slice(0,this.state.stepNumber+1);   
//     const current = history.slice()[history.length-1];
//     current.squares[index] =  this.state.xIsNext?'o':'x';
//     console.log(index)
//     // const squares = history[0].squares;
//     // if(calculateWinner(squares)) {
//     //   return;
//     // }
//     this.setState((state) =>{
//      return {
//       history:history.concat([current]),
//       xIsNext:!state.xIsNext,
//       stepNumber:history.length,
//      }
//     })
//   }
  
//   render() {
//     const {history,xIsNext,stepNumber} = this.state;
//     const squares = history[stepNumber].squares;
//     let status;
//     const winner = calculateWinner(squares)
//     if(winner) {
//       status = `the winner is ${winner}`;
//     }else {
//       status = ` Next player:${xIsNext?'o':'x'}`;
//     }   
//     return(
//       <div>        
//           <Board 
//             handleClick={this.handleClick.bind(this)}
//             squares={squares} />
//           <div className="game-info">
//             <p>{status}</p>
//           </div>
//       </div>
//     )
//   }
// }

// ReactDOM.render(
//   <Game />,
//   document.getElementById("root")
// );

// function calculateWinner(squares) {
//   const winArr = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
//   ]
  
//   for(let i=0;i<winArr.length;i++) {
//     const [a,b,c] = winArr[i];
//     if(squares[a]&&squares[a] ===squares[b]&&squares[a]===squares[c]){
//       console.log(squares[a],11111111)
//       return squares[a];
//     }
//   }
//   return null;
// }




