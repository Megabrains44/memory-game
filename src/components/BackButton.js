import React from "react"
import '../css/backbtn.css'

export default function BackButton(props){
    return (
        <button className="button_back" onClick={() => {
            props.goToMainMenu()
        }}>
            Back
        </button>
    )
}