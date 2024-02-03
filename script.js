function getComputerChoice(){
  let randomNum = Math.floor((Math.random() * 3) + 1);
  let choice;
  if(randomNum === 1){
    choice = 'rock';
  } 
  else if(randomNum === 2){
    choice = 'scissor';
  }
  else{
    choice = 'paper';
  }
  return choice;
}

let playerCounter = 0;
  let compCounter = 0;


function playRound(playerSelection, computerSelection){
  
  
  if(playerSelection === computerSelection){
    
    para.textContent = "TIE!";

  }
   else if(playerSelection === 'rock' && computerSelection === 'scissor'){
     playerCounter++;
     para.textContent = `computer: ${computerSelection}|| you win, rock beats scissor`;
   }
   else if(playerSelection === 'rock' && computerSelection === 'paper'){
      compCounter++;
      para.textContent = `computer: ${computerSelection} || you lose, paper beats rock`;
   }
   else if(playerSelection === 'paper' && computerSelection === 'rock'){
    playerCounter++;
    para.textContent = `computer: ${computerSelection} || you win, paper beats rock`;
   }
   else if(playerSelection === 'paper' && computerSelection === 'scissor'){
    compCounter++;
    para.textContent = `computer: ${computerSelection} || you lose, scissor beats paper`;
   }
   else if(playerSelection === 'scissor' && computerSelection === 'paper'){
    playerCounter++;
    para.textContent = `computer: ${computerSelection} || you win, scissor beats paper`;
   }
   else if(playerSelection === 'scissor' && computerSelection === 'rock' ){
    compCounter++;
    para.textContent = `computer: ${computerSelection} || you lose, rock beats scissor`; 

   }

   
  }
  const displayScore = document.querySelector("#displayScore");
   const para = document.createElement('p');
  const paraSecond = document.createElement('p');
  paraSecond.classList.add("resultText");
  para.classList.add("score");
  displayScore.appendChild(para);
  displayScore.appendChild(paraSecond);
  const rockBtn = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');


rockBtn.addEventListener("click", () => {
  playerSelection = "rock";
  computerSelection = getComputerChoice();
  playRound(playerSelection,computerSelection);
  checkWinner();
});

paper.addEventListener("click", () => {
  playerSelection = "paper";
  computerSelection = getComputerChoice();
  playRound(playerSelection,computerSelection);
  checkWinner();
});

scissor.addEventListener("click", () => {
  playerSelection = "scissor";
  computerSelection = getComputerChoice();
  playRound(playerSelection,computerSelection);
 checkWinner();
});

function restartGame(){
  const reload = document.querySelector('#reload');
  const refresh = document.createElement("button");
  refresh.textContent = "Restart-the-🎮"
  refresh.classList.add("refreshBtn");
  reload.appendChild(refresh);
  refresh.addEventListener("click", () => {
    location.reload()
});
}

function stopGame(){
  document.querySelector('#rock').disabled = true;
  document.querySelector('#paper').disabled = true;
  document.querySelector('#scissor').disabled = true;
}


function checkWinner(){
  paraSecond.textContent = `your score: ${playerCounter} || computerScore: ${compCounter}`;

if(playerCounter >= 5){
  paraSecond.textContent = "🎊Congrats, You won the Match🎊";
  stopGame();
}
else if(compCounter >= 5){
    paraSecond.textContent = "**👎 You Lost the Match**";
   stopGame();
}

}

restartGame();