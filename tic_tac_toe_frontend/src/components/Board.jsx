import React from 'react';
import Square from './Square';

// PUBLIC_INTERFACE
export default function Board({ squares, onPlay, highlight = [] }) {
  /** Renders a 3x3 board. Highlight winning squares via emphasis styling. */
  return (
    <div className="board" role="grid" aria-label="Tic Tac Toe Board">
      {squares.map((value, index) => {
        const isWinning = highlight.includes(index);
        return (
          <Square
            key={index}
            value={value}
            onClick={() => onPlay(index)}
            winning={isWinning}
            aria-label={`Square ${index + 1}`}
          />
        );
      })}
    </div>
  );
}
