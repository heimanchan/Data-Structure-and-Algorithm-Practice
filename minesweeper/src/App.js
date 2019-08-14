import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './App.css'

const BOARD_SIZE = 7
const RESET_BUTTON_TEXT = 'New game'
const INITIAL = "initial"
const MINE = "mine"
const CLEAR = "clear"

class App extends Component {
  static propTypes = {
    boardRowsCount: PropTypes.number.isRequired,
    boardColsCount: PropTypes.number.isRequired,
  }

  static defaultProps = {
    boardRowsCount: BOARD_SIZE,
    boardColsCount: BOARD_SIZE,
  }

  state = {
    board: this.newBoard(),
  }

  render() {
    console.table(
      this.state.board.map((row) => row.map((cell) => JSON.stringify(cell.isMine)))
    )

    const board = this.state.board.map(row => {
      return (
        <div className="row">
          {row.map(cell => {
            return (
              cell.cellContent()
            )
          })}
        </div>
      )
    })

    return (
      <div className="App">
        <button className="resetButton" onClick={this.resetBoard}>
          {RESET_BUTTON_TEXT}
        </button>
        <main className="board">
          {board}
        </main>
      </div>
    )
  }

  renderCell(command=INITIAL, x=0, y=0, value="") {
    let cellID = `cell-${x}-${y}`;
    let cellContent;
    
    if (command === INITIAL) {
      const initialContents = (<span
        className="cellContents--initial"
        id={cellID}
        onClick={(e) => this.handleClick(e)}
      >
        {this.state.board[x][y].adjacentMinesCount}
      </span>)
      cellContent = initialContents;
    } else if (command === MINE) {
      const mineContents = (
        <span className="cellContents--isMine" role="img" aria-label="mine">
          💣
      </span>
      )
      cellContent = mineContents;
    } else if (command === CLEAR) {
      const clearedContents = <span className="cellContents--isCleared" id={cellID}>{`${value}`}</span>
      cellContent = clearedContents;
    }
    return <span className="cell">{cellContent}</span>
  }

  // Suggested/optional helper methods:
  adjacentCells(row, col) {
    let cells = [];
    for (let r = -1; r < 2; r++) {
      let x = row + r;
      if (x < 0 || x >= this.props.boardRowsCount) continue;

      for (let c = -1; c < 2; c++) {
        let y = col + c;
        if (y < 0 || y >= this.props.boardColsCount) continue;
        if (row === x && col === y) continue;

        cells.push(this.state.board[x][y])
      }
    }
    
    return cells;
  }

  adjacentMinesCount(row, col) {
    let cells = this.adjacentCells(row, col);
    let count = 0;

    cells.forEach(cell => cell.isMine ? count++ : null);

    return count;
  }
  
  clearCell() {
    return this.renderCell(CLEAR);
  }

  revealAllAdjacentCells(x, y) {
    if (this.state.board[x][y].isRevealed && this.state.board[x][y].adjacentMinesCount) return;
    let cells = this.adjacentCells(x, y);

    cells.map(cell => {
      if (!cell.isRevealed && !cell.isMine && !cell.adjacentMinesCount) {
        let updateBoard = this.state.board;
        let minesCount = this.adjacentMinesCount(cell.row, cell.col);

        if (minesCount > 0) {
          updateBoard[cell.row][cell.col].isRevealed = true;
          updateBoard[cell.row][cell.col].adjacentMinesCount = minesCount;
          updateBoard[cell.row][cell.col].cellContent = () => this.renderCell(CLEAR, cell.row, cell.col, minesCount);

        } else {
          updateBoard[cell.row][cell.col].isRevealed = true;
          updateBoard[cell.row][cell.col].cellContent = () => this.renderCell(CLEAR, cell.row, cell.col);
        }

        this.setState({ board: updateBoard })
        this.revealAllAdjacentCells(cell.row, cell.col);
      }

      return null;
    });
  }

  handleClick(e) {
    let coordinates = e.target.id.match(/\d+/g);
    let x = parseInt(coordinates[0]);
    let y = parseInt(coordinates[1]);
    let minesCount = this.adjacentMinesCount(x, y);

    if (this.state.board[x][y].isMine) {
      let updateBoard = this.state.board;
      updateBoard[x][y].isRevealed = true;
      updateBoard[x][y].cellContent = () => this.renderCell(MINE, x, y);

      this.setState({ board: updateBoard })

    } else if (minesCount > 0) {
      let updateBoard = this.state.board;
      updateBoard[x][y].adjacentMinesCount = minesCount;
      updateBoard[x][y].isRevealed = true;
      updateBoard[x][y].cellContent = () => this.renderCell(CLEAR, x, y, minesCount);

      this.setState({ board: updateBoard })
    } else {
      let updateBoard = this.state.board;
      updateBoard[x][y].cellContent = () => this.renderCell(CLEAR, x, y);
      this.setState({ board: updateBoard })
      this.revealAllAdjacentCells(x, y)
    }
  }

  newBoard() {
    const { boardRowsCount, boardColsCount } = this.props
    const newBoard = []

    for (let r = 0; r < boardRowsCount; r++) {
      const row = []
      for (let c = 0; c < boardColsCount; c++) {
        // Suggestion: const isMine = Math.floor(Math.random() * 8) === 0
        const cell = {
          isMine: Math.floor(Math.random() * 8) === 0,
          row: r,
          col: c,
          cellContent: () => this.renderCell(INITIAL, r, c),
          adjacentMinesCount: null,
          isRevealed: false,
        }
        row.push(cell)
      }
      newBoard.push(row)
    }

    return newBoard
  }

  resetBoard = () => {
    this.setState({ board: this.newBoard() })
  }
}

export default App
