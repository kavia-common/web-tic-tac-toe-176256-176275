import React, { useMemo, useState } from 'react';
import Board from './Board';
import MoveHistory from './MoveHistory';

/** Calculate winner given a 3x3 board array. Returns 'X' | 'O' | null and winning line indices. */
function calculateWinner(squares) {
  const lines = [
    [0,1,2],[3,4,5],[6,7,8], // rows
    [0,3,6],[1,4,7],[2,5,8], // cols
    [0,4,8],[2,4,6]          // diags
  ];
  for (const [a,b,c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: [a,b,c] };
    }
  }
  return { winner: null, line: [] };
}

// PUBLIC_INTERFACE
export default function Game() {
  /**
   * A self-contained Tic Tac Toe game using React hooks.
   * - Alternates turns between X and O
   * - Shows status: turn, win, or draw
   * - Reset button clears game
   * - Optional basic move history (square index and player)
   */
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([]); // {index, player}[]
  const [highlight, setHighlight] = useState([]); // winning indices

  const { winner, line } = useMemo(() => calculateWinner(squares), [squares]);

  const isBoardFull = useMemo(() => squares.every(Boolean), [squares]);
  const isDraw = !winner && isBoardFull;

  const statusText = useMemo(() => {
    if (winner) {
      const name = winner === 'X' ? 'Knight' : 'Queen';
      return `${name} wins`;
    }
    if (isDraw) return 'Draw';
    const turnName = xIsNext ? 'Knight' : 'Queen';
    return `${turnName}’s turn`;
  }, [winner, isDraw, xIsNext]);

  function handlePlay(index) {
    if (squares[index] || winner) return; // ignore if occupied or game over
    const next = squares.slice();
    next[index] = xIsNext ? 'X' : 'O';
    setSquares(next);
    setHistory((h) => [...h, { index, player: next[index] }]);
    setXIsNext(!xIsNext);
    const calc = calculateWinner(next);
    if (calc.winner) setHighlight(calc.line);
  }

  function resetGame() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setHistory([]);
    setHighlight([]);
  }

  const statusClass = winner ? 'status win' : isDraw ? 'status draw' : 'status';

  return (
    <div>
      <div className={statusClass} aria-live="polite" aria-atomic="true">
        <span className="dot" />
        <span>{statusText}</span>
      </div>

      <Board
        squares={squares}
        onPlay={handlePlay}
        highlight={highlight}
      />

      <div className="controls">
        <button className="btn btn-primary" onClick={resetGame} aria-label="Reset game">
          Reset Game
        </button>
        <MoveHistory history={history} />
      </div>
    </div>
  );
}
