let userScore=0;
let computerScore=0;
let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let user=document.querySelector("#user_score");
let comp=document.querySelector("#comp_score");

let genChoice=()=>{
    let options=["rock","paper","scissors"]
    let compC=Math.floor(Math.random()*3);
    return options[compC];
}

let drawGame=()=>{
    console.log("Game was draw");
    msg.innerHTML="GAME WAS A DRAW!, PLAY AGAIN";
}

let winGame=(userWin)=>{
    if(userWin){
        userScore++;
        user.innerHTML=userScore;
        msg.innerHTML="YOU WON!";
        msg.style.backgroundColor="green";
        msg.style.color="white";
        
    }
    else{
        computerScore++;
        comp.innerHTML=computerScore;
        msg.innerHTML="YOU LOST!, PLAY AGAIN";
        msg.style.backgroundColor="red";
        msg.style.color="white";
    }
}

let playGame=(userChoice)=>{
    let compChoice=genChoice();
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice === "rock"){
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        winGame(userWin);
    }

}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})
