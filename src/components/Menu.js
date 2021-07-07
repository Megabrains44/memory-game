import '../css/Menu.css'
import ReactDOM from "react-dom";
import Game from "../Game";
import React from 'react'
export default function Menu(props){
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
                    props.gameChange();
                }, 100)
                
               
                }} 
            >
            PLAY
            </button>
            <button className="menu_btn">ABOUT</button>
            <button className="menu_btn">DEV MODE</button>
            </div>
            
        </div>
        
    )
}