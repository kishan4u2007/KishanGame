let userScore = 0;
let compScore = 0;

const userScorePara =  document.querySelector("#user-score")
const compScorePara =  document.querySelector("#comp-score")

const choices = document.querySelectorAll(".choice");
let msg =  document.querySelector("#msg")

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"]
   const randInd = Math.floor(Math.random() * 3);
   return options[randInd];
}

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again"
    msg.style.backgroundColor = "#081b31"
}

const showWinner = (userWin, userChoice, compChoice) => {

    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = ` You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }

}


const playGame = (userChoice) => {
  console.log("User Choice", userChoice);

  let compChoice =  genCompChoice()
  console.log("Comp Choice", compChoice)

  if(userChoice === compChoice) {
    drawGame()
  }else {
    let userWin = true;
    if(userChoice === "rock") {
      //comp have only option "Paper", Scissors
      userWin = compChoice === "paper" ? false :  true
    }else if (userChoice === "paper") {
        //comp have only option "Rock", Scissors
        userWin =  compChoice === "scissors" ? false :  true
    }else  {
        //rock, paper
        userWin =  compChoice === "rock" ? false :  true
    }

    showWinner(userWin, userChoice, compChoice)

  }

 
  //Generate computer choice -> Modular
};

choices.forEach((choice) => {
  choice.addEventListener("click", function () {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});


