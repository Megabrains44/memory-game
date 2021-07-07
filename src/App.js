import './css/App.css'
import Menu from './components/Menu';
import Game from './Game';
import { useEffect, useState } from 'react';
import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isPlaying: false
    }
    this.gameContentStyle = {
      display: "flex",
      justifyContent: "center"
    }
    this.gameChange = this.gameChange.bind(this)
  }
  
  gameChange(){
    this.setState({isPlaying: true})
  }
  render(){
    return (
      <div className="App">
        <h1 className="game_title">Memory Game</h1>
        <div className="game_content" id="main" style={this.gameContentStyle}>
          <Menu gameChange = {this.gameChange}/>
          {this.state.isPlaying ? <Game /> : null}
          {/* <Game /> */}
        </div>
      </div>
      
    )
  }

}

  
  
  
  
  


export default App;
