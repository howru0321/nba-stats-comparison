import React, { useState } from 'react';
import Select from 'react-select';
import logo from './logo.svg';
import './App.css';

interface PlayerStats {
  PTS: number;
  REBS: number;
  ASTS: number;
  FG: number;
  ThreeFG: number;
  FT: number;
}

interface Player {
  name: string;
  stats: PlayerStats;
}

const seasons = [
  { value: '2016-17', label: '2016-17' },
  { value: '2017-18', label: '2017-18' },
  { value: '2018-19', label: '2018-19' },
  { value: '2019-20', label: '2019-20' },
];

const gameTypes = [
  { value: 'regular', label: 'Regular Season' },
  { value: 'playoff', label: 'Playoff' },
  { value: '1st-round', label: '1st Round' },
  { value: '2nd-round', label: '2nd Round' },
  { value: 'conf-final', label: 'Conf. Final' },
  { value: 'final', label: 'Final' },
];

function App() {
  const player1: Player = {
    name: "LeBron James",
    stats: {
      PTS: 27.9,
      REBS: 7.4,
      ASTS: 6.9,
      FG: 49.3,
      ThreeFG: 34.8,
      FT: 73.1,
    },
  };

  const player2: Player = {
    name: "Stephen Curry",
    stats: {
      PTS: 26.2,
      REBS: 6.3,
      ASTS: 6.8,
      FG: 49.7,
      ThreeFG: 43.7,
      FT: 92.3,
    },
  };

  type Players = {
    player1 : Player
    player2 : Player
  }

  function ComparisonList(props : Players){
    return (
      <table>
        <tbody>
          <tr>
            <td className="player-name">{props.player1.name}</td>
            <td></td>
            <td className="player-name">{props.player2.name}</td>
          </tr>
          <tr>
            <td>{props.player1.stats.PTS}</td>
            <td>PTS</td>
            <td>{props.player2.stats.PTS}</td>
          </tr>
          <tr>
            <td>{props.player1.stats.REBS}</td>
            <td>REBS</td>
            <td>{props.player2.stats.REBS}</td>
          </tr>
          <tr>
            <td>{props.player1.stats.ASTS}</td>
            <td>ASTS</td>
            <td>{props.player2.stats.ASTS}</td>
          </tr>
          <tr>
            <td>{props.player1.stats.FG}</td>
            <td>FG%</td>
            <td>{props.player2.stats.FG}</td>
          </tr>
          <tr>
            <td>{props.player1.stats.ThreeFG}</td>
            <td>3FG%</td>
            <td>{props.player2.stats.ThreeFG}</td>
          </tr>
          <tr>
            <td>{props.player1.stats.FT}</td>
            <td>FT%</td>
            <td>{props.player2.stats.FT}</td>
          </tr>
        </tbody>
      </table>
    );
  }

  const [selectedSeason, setSelectedSeason] = useState(seasons[0]);
  const [selectedGameType, setSelectedGameType] = useState(gameTypes[0]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="player">
          <div className="team-logo">Team Logo</div>
          <div className="player-name">{player1.name}</div>
        </div>
        <Select
            className="dropdown"
            options={seasons}
            value={selectedSeason}
            onChange={(option) => setSelectedSeason(option as { value: string; label: string })}
        />
        <Select
          className="dropdown"
          options={gameTypes}
          value={selectedGameType}
          onChange={(option) => setSelectedGameType(option as { value: string; label: string })}
        />
        <div className="player">
          <div className="team-logo">Team Logo</div>
          <div className="player-name">{player2.name}</div>
        </div>
      </header>
      <ComparisonList
        player1={player1}
        player2={player2}
      />
    </div>
  );
}

export default App;
