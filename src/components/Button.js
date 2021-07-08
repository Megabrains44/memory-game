import React from "react"
import '../css/Game.css'
export default function Button({color, id}){
    return (
        <button className="button" style={{backgroundColor:color}} id={id}></button>
    )
}