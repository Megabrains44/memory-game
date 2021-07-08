// import {settings} from '../scripts/variables'
import React, { useEffect } from 'react';
import './css/Game.css';
import Button from './components/Button';
import startGame from './scripts/game/start';
// import settings from './scripts/settings';
import BackButton from './components/BackButton';
class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {seconds: 4, starting: true, isMounted : false}
        // this.state = {seconds: 4, starting: -1}
        this.startCountDown = this.startCountDown.bind(this)
        
    }

    tick(){
        if (this.state.seconds === 1){
            this.setState(state => ({
                starting: false
            }))
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
        this.setState({isMounted: true})
        const time = 10;
        setTimeout(() => {
            const gameObject = document.getElementsByClassName('Game')[0];
            gameObject.style.marginTop = "unset";
            gameObject.style.opacity = "1";
            
            // setTimeout(() => this.tick(), 1000)
            
            
        }, time)
        
        
    
    }
    //{speed: 1, questions: 4}
// Game.js:51 {seconds: 2, starting: true, isMounted: true}-
    componentDidUpdate(prevProps, prevState){
        if (this.state.isMounted === false) return;
        console.log("Updaated Stuff")
        console.log('Previous Props')
        console.log(prevProps)
        console.log('Current Props')
        console.log(this.props)
        console.log('Previous State')
        console.log(prevState  )
        console.log("Current State")
        console.log(this.state)
        // console.log('updated')
        
        
        if (this.state.starting === true){setTimeout(() => this.tick(), 1000);}
    
        else if ((this.state.starting === false) && (this.state.isMounted === true)){
            console.log(this.props.speed)
            startGame({
                questions: this.props.questions,
                speed: this.props.speed
            });
        }
        
        // console.log(this.state.isMounted)
        
        

        
        // console.log(this.state.seconds)
        // console.log(document.getElementsByClassName())
        
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
        this.setState({isMounted: false})
    }
    render(){
        return (
            <div className="Game">
                <div className="gameStartingIn">
                    {this.state.starting ? "Game Starting in " + this.state.seconds : "Game Started" }
                </div>
                <div className="button_selector">
                    <Button color="red" id="topleft"/>
                    <Button color="blue" id="topright"/>
                    <Button color="green" id="bottomleft"/>
                    <Button color="yellow" id="bottomright"/>
                </div>
                <BackButton goToMainMenu={this.props.goToMainMenu}/>
            </div>
            
        )
    }   
   
    
}

export default Game;