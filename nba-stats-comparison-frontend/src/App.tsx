import React from 'react';
import logo from './logo.svg';
import './App.css';

interface PlayerStats {
  PTS: number;
  REBS: number;
  ASTS: number;
  FG: number;
  '3FG': number;
  FT: number;
}

interface Player {
  name: string;
  stats: PlayerStats;
}

function App() {
  const player1: Player = {
    name: "LeBron James",
    stats: {
      PTS: 27.9,
      REBS: 7.4,
      ASTS: 6.9,
      FG: 49.3,
      '3FG': 34.8,
      FT: 73.1,
    },
  };

  const player2: Player = {
    name: "Stephen Curry",
    stats: {
      PTS: 25.5,
      REBS: 6.3,
      ASTS: 6.8,
      FG: 49.7,
      '3FG': 43.7,
      FT: 92.3,
    },
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="player">
          <div className="team-logo">Team Logo</div>
          <div className="player-name">{player1.name}</div>
        </div>
        <div className="player">
          <div className="team-logo">Team Logo</div>
          <div className="player-name">{player2.name}</div>
        </div>
      </header>
      <table>
        <tbody>
          <tr>
            <td className="player-name">{player1.name}</td>
            <td></td>
            <td className="player-name">{player2.name}</td>
          </tr>
          <tr>
            <td>{player1.stats.PTS}</td>
            <td>PTS</td>
            <td>{player2.stats.PTS}</td>
          </tr>
          <tr>
            <td>{player1.stats.REBS}</td>
            <td>REBS</td>
            <td>{player2.stats.REBS}</td>
          </tr>
          <tr>
            <td>{player1.stats.ASTS}</td>
            <td>ASTS</td>
            <td>{player2.stats.ASTS}</td>
          </tr>
          <tr>
            <td>{player1.stats.FG}</td>
            <td>FG%</td>
            <td>{player2.stats.FG}</td>
          </tr>
          <tr>
            <td>{player1.stats['3FG']}</td>
            <td>3FG%</td>
            <td>{player2.stats['3FG']}</td>
          </tr>
          <tr>
            <td>{player1.stats.FT}</td>
            <td>FT%</td>
            <td>{player2.stats.FT}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
