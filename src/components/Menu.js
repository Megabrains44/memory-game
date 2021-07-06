import {React} from "react"
import '../css/Menu.css'
import ensureCountDown from "../scripts/game/ensureStartGame";

export default function Menu(){
    return (
        <div className="menu">
            <h2 className="menu_title">Options</h2>
            <div className="menu_selector">
            <button className="menu_btn" onClick={() => {
                const menu = document.getElementsByClassName('menu')[0];
                menu.style.marginTop = "730px";
                // setTimeout(() => {
                //     // menu.style.display = "none"
                //     menu.style.marginTop = "unset"
                // }, 700)
                // Game.startCountDown();
                ensureCountDown()
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