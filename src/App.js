import './css/App.css'
import Menu from './components/Menu';
import Game from './Game';
import { useState } from 'react';

function App() {
  const [isPlaying, setIsPlaying] = useState(false)
  const gameContentStyle = {
    display: "flex",
    justifyContent: "center"
  }

  return (
    <div className="App">
      <h1 className="game_title">Memory Game</h1>
      <div className="game_content" id="main" style={gameContentStyle}>
        {isPlaying ? <Game />: <Menu />}
      </div>
    </div>
    
  )
}

export default App;
