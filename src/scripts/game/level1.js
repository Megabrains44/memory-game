var gameStarting;
var button1;
var button2;
var button3;
var button4;
const level1Boxes = []
var numQuestions;

function darkenElement(currentColor, element){
  element.style.backgroundColor = "dark" + currentColor;
  if (currentColor === 'yellow'){
    // element.style.backgroundColor = "orange";
    element.style.backgroundColor = "#888820"
  }
  var audio = new Audio('/sounds/tom.wav');
  audio.play()
  
}


function lightenElement(currentColor, element){
  // console.log('lightened element')
  // console.log(element.style.backgroundColor)
  const string = currentColor.replace('dark', '')
  element.style.backgroundColor = string;
  
  // console.log(element)
  ;if (currentColor === 'orange'){
    element.style.backgroundColor = "yellow"
  }
}


function getRandomBox(i){
  
  const buttonMap = {
    "1" : button1,
    "2" : button2,
    "3" : button3,
    "4" : button4
  }

  const num = Math.floor(Math.random() * 4) + 1

  
  
  const btn = buttonMap[num.toString()]
  return btn;
}



var counter = 0;

var correctClicks = [];
var userClicks = []
function correctAnswer(){
    console.log('yay')
    document.body.style.backgroundColor = "lightblue"
    correctClicks.push('Correct')
    var audio = new Audio('/sounds/tom.wav');
    audio.play()
}
function wrongAnswer(){
    document.body.style.backgroundColor = "red"
    document.body.style.background = "radial-gradient(#f3c5c5, #d81616)"
    gameStarting.innerText = "Level 1 Failed :(";
    correctClicks.push('Incorrect');
    console.log(correctClicks)
  
    var audio = new Audio('/sounds/buzzer.wav');
    audio.play();
    // alert('Would you like to continue')
    // const response = confirm('Would you like to continue');
    // menu_wrapper.classList.remove('animatedown')
  
    // // menu_wrapper.classList.add('animateup')
    // // menu_selector.style.display = "flex";
    // // menu_wrapper.style.display = "flex";
    // menu_selector.style.display = "flex"
    // menu_wrapper.style.display = "flex"
}
function levelPassed(){
    console.log(correctClicks)
    gameStarting.innerText = "Level 1 Passed!"
    document.body.style.backgroundColor = "lightgreen"
    document.body.style.background = "radial-gradient(#c6f1c6, #1bce1b)"
    var audio = new Audio('/sounds/ding.wav');
    audio.play();
}
  
function startEventHandler(){
    
    const buttons = document.getElementsByClassName('button');
    if (counter > numQuestions) return;
    const buttonElement = (counter) => level1Boxes[counter-1];
    const all = (list) => {
        var isAllCorrect = true
        for (var i = 0; i < list.length; i++){
          var item = list[i];
          if (item === 'Incorrect') {
            isAllCorrect = false
          };
        }
        return isAllCorrect;
      }
      buttons.forEach(button => {
        button.addEventListener('click', () => {
            userClicks.push(button);
            counter += 1;
            if (button === buttonElement(counter)){
                correctAnswer()
            } else{
                wrongAnswer()
            }
            if ((counter === numQuestions) && (all(correctClicks) === true)){
                levelPassed()
            }
        })
    })
    // for (const button of buttons){
    //     button.addEventListener('click', () => {
    //         userClicks.push(button);
    //         counter += 1;
    //         if (button === buttonElement(counter)){
    //             correctAnswer()
    //         } else{
    //             wrongAnswer()
    //         }
    //         if ((counter === numQuestions) && (all(correctClicks) === true)){
    //             levelPassed()
    //         }
    //     })
    // }
}
export default function level1(speed, questions){
  counter = 0;
    numQuestions = questions 
    level1Boxes.splice(0,level1Boxes.length)
    correctClicks.splice(0,correctClicks.length)
    button1 = document.getElementById('topleft')
    
    button2 = document.getElementById('topright')
    button3 = document.getElementById('bottomleft')
    button4 = document.getElementById('bottomright')
    gameStarting = document.getElementsByClassName('gameStartingIn')[0]

    // console.log(document.body)
    // console.log(button1)
    
    console.log(numQuestions)
    gameStarting.innerText = "Level 1"
    for (var i=0; i<numQuestions; i++){
        level1Boxes.push(
        getRandomBox(i)
    )
    }
    console.log(level1Boxes)
    var timeVar = 1;
    var prevElement = null;
    console.log(correctClicks)
    level1Boxes.forEach(box => {
        // console.log(box)
        prevElement = box;
        
        
        const time = Math.round((1/speed) * 1000)
        const currentColor = box.style.backgroundColor;

        // darkenElement(currentColor, box);
        // setTimeout(darkenElement, (1000 * timeVar),currentColor, box )
        setTimeout(darkenElement, (time * timeVar),currentColor, box)
        setTimeout(lightenElement, (time * (timeVar + 0.5)), prevElement.style.backgroundColor, prevElement)
        

        
        timeVar++;
        console.log(prevElement.style.backgroundColor)
  })
  startEventHandler()
 
}










