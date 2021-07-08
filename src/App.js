import './css/App.css'
import Menu from './components/Menu';
import Game from './Game';
// import { useEffect, useState } from 'react';
// import settings from './scripts/settings';
import React from 'react';
import About from './components/About';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentSelection: "menu",
      isPlaying: false,
      isAbout: false,
      gameSpeed: 1,
      numQuestions: 4
    }
    this.gameContentStyle = {
      display: "flex",
      justifyContent: "center"
    }
    
    this.gameChange = this.gameChange.bind(this)
    this.aboutHandler = this.aboutHandler.bind(this)
  }
  
  gameChange(questions, speed){
    this.setState({isPlaying: true, currentSelection: "game", numQuestions:questions, gameSpeed:speed})
    // this.setState({numQuestions: questions})
    // this.setState({gameSpeed: speed})
    
  }
  aboutHandler(){
    this.setState({currentSelection: "about"})
  }
  goToMainMenu(selector){
    this.setState({currentSelection: `menu_${selector}`})
    console.log(selector)
    const menu = document.getElementsByClassName('menu')[0]
    menu.style.display = "flex"
    menu.style.marginTop = "-100px"
    menu.style.opacity = "1"
    if (selector === "about"){
      const about = document.getElementsByClassName('About')[0];
      about.style.top = "1000px";
      about.style.opacity = "0"
    }
    if (selector === "game"){
      const game = document.getElementsByClassName('Game')[0];
      game.style.top = "1000px";
      game.style.opacity = "0"
    }
    
  }
  
  render(){

    let content;
    let selected = this.state.currentSelection;
    if (selected === "menu"){
      content = 
      <>
      <Menu gameChange = {this.gameChange} aboutHandler = {this.aboutHandler}/>
      
      </>
    } else if (selected === "menu_about"){
      content = 
      <>
      
      <Menu gameChange = {this.gameChange} aboutHandler = {this.aboutHandler}/>
      <About />
      </>
    } else if (selected === "menu_game"){
      content = 
      <>
      <Menu gameChange = {this.gameChange} aboutHandler = {this.aboutHandler}/>
      </>
    }
    
    else if (selected === "game"){
      content = 
      <>
      <Menu gameChange = {this.gameChange} aboutHandler = {this.aboutHandler}/>
      {/* <Game speed={settings.speed} questions={settings.questions} goToMainMenu={() => {this.goToMainMenu('game')}}/> */}
      <Game speed={this.state.gameSpeed} questions={this.state.numQuestions} goToMainMenu={() => {this.goToMainMenu('game')}}/>
      </>
    }
    
    else if (selected === "about"){
      content = 
      <>
      <Menu />
      <About default={true} goToMainMenu={() => {
        this.goToMainMenu('about')
      }}/>
      </>
    }
    console.log(this.state.currentSelection)

    // 
    return (
      <div className="App">
        <h1 className="game_title">Memory Game</h1>
        <div className="game_content" id="main" style={this.gameContentStyle}>
          {content}
        </div>
      </div>
      
    )



    // return (
    //   <div className="App">
    //     <h1 className="game_title">Memory Game</h1>
    //     <div className="game_content" id="main" style={this.gameContentStyle}>
    //       <Menu gameChange = {this.gameChange}/>
    //       {this.state.isAbout ? <About /> : null}
    //       {this.state.isPlaying ? <Game speed={settings.speed} questions={settings.questions}/> : null}
    //     </div>
    //   </div>
      
    // )
  }

}

  
  
  
  
  


export default App;
