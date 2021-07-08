import level1 from "./level1";
import settings from "../settings";
// export default function startGame(gameVar){
//     const {speed, questions} = gameVar;
//     console.log('game e');
//     document.body.style.backgroundColor = "lightblue"
//     document.body.style.background = "radial-gradient(rgb(233, 249, 255), rgb(55 55 195))";
//     var audio = new Audio('/sounds/intro.mp3');
//     audio.play();
//     level1()
// }
export default function startGame(gameVar){
    const {speed, questions} = gameVar;
    document.body.style.backgroundColor = "lightblue"
    document.body.style.background = "radial-gradient(rgb(233, 249, 255), rgb(55 55 195))";
    var audio = new Audio('/sounds/intro.mp3');
    audio.play();
    level1(speed, questions)
}