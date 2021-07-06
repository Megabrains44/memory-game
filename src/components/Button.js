import React from "react"
import '../css/Game.css'
export default function Button({color}){
    return (
        <button className="button" style={{backgroundColor:color}}></button>
    )
}