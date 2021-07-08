import React from "react"
import '../css/components.css'

export default function BackButton(props){
    return (
        <button className="button_back" onClick={() => {
            props.goToMainMenu()
        }}>
            Back
        </button>
    )
}