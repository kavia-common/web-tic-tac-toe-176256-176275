import React from 'react';

// PUBLIC_INTERFACE
export default function MoveHistory({ history }) {
  /** Displays a compact list of past moves in order. */
  if (!history?.length) {
    return (
      <div className="history" aria-live="polite">
        <h4>Moves</h4>
        <div className="history-list">
          <span className="history-item" style={{ opacity: 0.6 }}>No moves yet</span>
        </div>
      </div>
    );
  }

  return (
    <div className="history" aria-live="polite">
      <h4>Moves</h4>
      <div className="history-list">
        {history.map((m, i) => (
          <span key={`${m.index}-${i}`} className="history-item">
            {i + 1}. {m.player}@{m.index + 1}
          </span>
        ))}
      </div>
    </div>
  );
}
