export default function startGame(gameVar){
    const {speed, questions} = gameVar;
    console.log('game started');
    document.body.style.backgroundColor = "lightblue"
    document.body.style.background = "radial-gradient(rgb(233, 249, 255), rgb(55 55 195))";
    var audio = new Audio('/sounds/intro.mp3');
    audio.play();

}