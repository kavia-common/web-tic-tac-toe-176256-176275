import React from 'react';

// PUBLIC_INTERFACE
export default function Square({ value, onClick, winning }) {
  /**
   * A single square button for the Tic Tac Toe board.
   * Applies different color accents for X and O, and highlight when part of a win.
   */
  const classNames = ['square'];
  if (value === 'X') classNames.push('x');
  if (value === 'O') classNames.push('o');

  const style = winning
    ? { outline: '2px solid rgba(37,99,235,0.45)', background: '#eaf1ff' }
    : undefined;

  return (
    <button
      type="button"
      className={classNames.join(' ')}
      onClick={onClick}
      aria-label={`Place ${value || 'mark'} here`}
      style={style}
    >
      {value}
    </button>
  );
}
