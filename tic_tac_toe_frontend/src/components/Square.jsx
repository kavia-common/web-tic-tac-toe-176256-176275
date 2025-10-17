import React from 'react';

// PUBLIC_INTERFACE
export default function Square({ value, onClick, winning }) {
  /**
   * A single square button for the Tic Tac Toe board.
   * Applies different color accents for X and O, and highlight when part of a win.
   * Renders chess piece icons:
   *  - X -> ♞ (Knight)
   *  - O -> ♛ (Queen)
   */
  const classNames = ['square'];
  if (value === 'X') classNames.push('x');
  if (value === 'O') classNames.push('o');

  // Map value to chess icon and accessible name
  const icon = value === 'X' ? '♞' : value === 'O' ? '♛' : '';
  const pieceName = value === 'X' ? 'Knight' : value === 'O' ? 'Queen' : 'mark';

  const style = winning
    ? { outline: '2px solid rgba(37,99,235,0.45)', background: '#eaf1ff' }
    : undefined;

  return (
    <button
      type="button"
      className={classNames.join(' ')}
      onClick={onClick}
      aria-label={`Place ${pieceName} here`}
      style={style}
    >
      <span className="square-icon" aria-hidden="true">{icon}</span>
    </button>
  );
}
