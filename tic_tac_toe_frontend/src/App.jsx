import React from 'react';
import Game from './components/Game';
import './styles.css';

// PUBLIC_INTERFACE
export default function App() {
  /** Root App that renders the Tic Tac Toe Game inside a centered card with theme styling. */
  return (
    <div className="app-root">
      <div className="card" role="application" aria-label="Tic Tac Toe Game">
        <div className="header">
          <h1 className="title">Tic Tac Toe</h1>
          <span className="badge">Ocean Professional</span>
        </div>
        <Game />
        <div className="footer-note">Play locally vs yourself. No accounts, no tracking.</div>
      </div>
    </div>
  );
}
