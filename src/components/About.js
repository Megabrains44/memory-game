import { useEffect } from 'react'
import '../css/About.css'
import BackButton from './BackButton'
function AboutSection({title, paragraph}){
    return (
        <section className="about_section">
                    <h2 className="about_paragraph_title">{title}</h2>
                    <div className="about_paragraph">{paragraph}</div>
        </section>
    )
}


export default function About(props){
    function defaultStyle(){
        const about = document.getElementsByClassName('About')[0];
        about.style.top = "0";
        about.style.opacity = "1"
    }
    useEffect(() => {
        if (props.default === true){
            defaultStyle()
        }
        console.log(document.body)
    const buttonBack = document.getElementsByClassName('button_back')[0];

    buttonBack.style.position = "absolute";
    buttonBack.style.marginTop = ".8rem";
    buttonBack.style.left = "11%";
    buttonBack.style.bottom = "20px";
    buttonBack.style.top = "unset";
    })
    
    
    // {
    
    //     position: absolute;
    //     margin-top: .8rem;
    //     left: 11%;
        
    // }
    return (
        <div className="About">
            <h2 className="about_text">About Memory Game</h2>
            <div className="about_content">
                <AboutSection 
                    title = "Description"
                    paragraph = "This game is a game where you can test your memory by clicking on the correct buttons. All you have to do is click the correct buttons that the computer clicks on and remember the order of the buttons clicked. Good luck!"
                />
                <AboutSection 
                    title = "How to play"
                    paragraph = "After you click play and the countdown finishes, buttons will start randomly getting clicked. As they get clicked, remember the order of the buttons using their colors. Once the buttons stop clicking, you can start clicking the buttons in the same order. If you get it right, you can keep going on until you see that you passed the level. However, if you get it wrong, a buzzer will play and you will have to return to the main menu."
                />
                
            </div>
            <BackButton goToMainMenu={props.goToMainMenu}/>
        </div>
    )
}
