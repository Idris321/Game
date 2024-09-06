let userScore = 0;
let compScorce =0;

const choices= document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genComputerChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const showWinner = (userWin,userChoice, compChoice) => {
    if (userWin) {
        userScore ++;
        userScorePara.innerText= userScore;
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScorce ++;
        compScorePara.innerText = compScorce;
        msg.innerText=`you lose ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";

    }
}

const drawGame = () => {
    msg.innerText="Game was draw";
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})


const playGame = (userChoice) => {
    
    const compChoice = genComputerChoice() ;

    if(userChoice === compChoice) {
        drawGame();
    }
    else{
        let userWin = true ;
    if(userChoice === "rock") {
        //scissors,paper
        userWin = compChoice === "paper" ? false : true ;
    }else if(userChoice === "paper") {
        //rock,scissors
        userWin = compChoice === "scissors" ? false : true ;
    }else {
        //rock,paper
        userWin = compChoice === "rock" ? false : true ;
    }
    showWinner(userWin,userChoice,compChoice);
    }
}

