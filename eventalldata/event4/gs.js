const rand=parseInt(Math.random()*100);
const submit=document.querySelector("#subt");
const userInput=document.querySelector("#guesField");

const para=document.createElement("p");
let prevGuess=[];
let numGuess=1;
let playGame=true;

if(playGame)
{
    submit.addEventListener("click",function(e){
        e.preventDefault();
      const gus=  userInput.value
      validateGusses(gus)
    });
}

function validateGusses(gus)
{
if(isNaN(gus))
{
    alert("Please enter a valid number");
}
else if(gus <1)
{
    alert("Please enter a number more than 1")
}
else if(gus>100)
{
    alert("please enter a number less than 100 ")
}
else{
 prevGuess.push(gus);
    if(numGuess===11)
    {
        displayGus(gus)
        displayMessage("GameOver")
        endGame()
    }
    else{
        displayGus(gus)
        checkGusses(gus)
    }
}
}

function checkGusses(gus)
{
    if(gus===randomNumber)
    {
        displayMessage("you gus number is correct")
        endGame()
    }else if(guses <randomNumber)
    {
        displayMessage("Number is too low")
    }
    else if(guses > randomNumber)
    {
        displayMessage("Number is too high")
    }


}

function displayGusess(gus)
{
    useInput=''

}

function displayMessage(message)
{

}

function endGame()
{
    
}