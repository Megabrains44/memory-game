// import {settings} from '../scripts/variables'
// import startGame from '../scripts/game/start';
import React from 'react';
import './css/Game.css';
import Button from './components/Button';
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
        }
    }
    startCountDown(){
        setTimeout(() => this.tick(), 1000)
    }
    componentDidMount(){
        
        setTimeout(() => this.tick(), 1000)
        
    
    }
    componentDidUpdate(){
        if (this.state.starting === true){setTimeout(() => this.tick(), 1000);}
        
        
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