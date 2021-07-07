// import {settings} from '../scripts/variables'
// import startGame from '../scripts/game/start';
import React from 'react';
import './css/Game.css';
import Button from './components/Button';
import startGame from './scripts/game/start';
import settings from './scripts/settings';
class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {seconds: 4, starting: true}
        this.startCountDown = this.startCountDown.bind(this)
    }

    tick(){
        if (this.state.seconds === 1){
            this.setState(state => ({
                starting: false
            }))
            // console.log(this.state.seconds)
        }
        else{
            this.setState(state => ({
                seconds: state.seconds - 1
            }));
            var audio = new Audio('/sounds/tick.wav');
            audio.play();
        }
    }
    startCountDown(){
        setTimeout(() => this.tick(), 1000)
    }
    componentDidMount(){
        const time = 10;
        setTimeout(() => {
            const gameObject = document.getElementsByClassName('Game')[0];
            gameObject.style.marginTop = "unset";
            gameObject.style.opacity = "1";
            
            setTimeout(() => this.tick(), 1000)
            
            
        }, time)
        
        
    
    }
    componentDidUpdate(){
        if (this.state.starting === true){setTimeout(() => this.tick(), 1000);}
         
        else {
            startGame(settings);
        }

        
        console.log(this.state.seconds)
        
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render(){
        return (
            <div className="Game">
                <div className="game_startingIn">
                    {this.state.starting ? "Game Starting in " + this.state.seconds : "Game Started" }
                </div>
                <div className="button_selector">
                    <Button color="red"/>
                    <Button color="blue"/>
                    <Button color="green"/>
                    <Button color="yellow"/>
                </div>
            </div>
            
        )
    }   
   
    
}

export default Game;