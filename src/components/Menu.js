import '../css/Menu.css'
// import Game from "../Game";
import React from 'react'
import settings from '../scripts/settings';
export default class Menu extends React.Component{
    componentDidUpdate(){
        // console.log('menu was updated')
        // const menu = document.getElementsByClassName('menu')[0];
        // menu.style.marginTop = "-100px";
        // menu.style.opacity = "1"
    }
    render(){
        return (
            <div className="menu">
                <h2 className="menu_title">Options</h2>
                <div className="menu_selector">
                <button className="menu_btn" onClick={() => {
                    const menu = document.getElementsByClassName('menu')[0];
                    menu.style.marginTop = "800px";
                    menu.style.opacity = "0"
                    setTimeout(() => {
                        // menu.style.display = "none"
                        // menu.style.marginTop = "0"
                        // ReactDOM.render(
                        //     <React.StrictMode>
                        //         <Game />
                        //     </React.StrictMode>,
                        //     document.getElementById('main')
                       
                        // );
                        var numOfQuestionsInput = document.getElementById('questionInput').value;
                        if (!numOfQuestionsInput){
                            numOfQuestionsInput = 4;
                        }
                        var speedInput = document.getElementById('speedInput').value;
                        if (!speedInput){
                            speedInput = 1;
                        }
                        settings.questions = numOfQuestionsInput;
                        settings.speed = speedInput
                        this.props.gameChange(numOfQuestionsInput, speedInput);

                    },100)
                    
                   
                    }} 
                >
                PLAY
                </button>
                <button className="menu_btn" onClick={() => {
                    const menu = document.getElementsByClassName('menu')[0];
                    menu.style.marginTop = "800px";
                    menu.style.opacity = "0"
                    this.props.aboutHandler()
                }
                }>ABOUT</button>
                <button className="menu_btn">DEV MODE</button>
                
                </div>
                <div className="questionSelect">
                <label htmlFor="questionInput" className="questionInputLabel">Num of Questions</label>
                <input type="text" placeholder="4" id="questionInput" />
                </div>
                <div className="speedSelect">
                    <label htmlFor="speedInput" className="speedInputLabel">Speed</label>
    
                    <input type="text" placeholder="1" id="speedInput" />
                </div>
                
            </div>
        )
    }
    
}