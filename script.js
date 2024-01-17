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

function getPlayerChoice(){
  let caseNormalize;
  let playerInput = prompt("choose your weapon");
   caseNormalize = playerInput.toLowerCase();
   return caseNormalize;

}

function getScore(){
  let PlayerCounter = 0;
  let compCounter = 0;
  let score;
  playerSelection = getPlayerChoice();
  computerSelection = getComputerChoice();
  score = playRound(playerSelection, computerSelection);
    if(score === "you win, Rock beats scissor"|| score === "you win, paper beats rock" || score === "you win, scissor beats paper") {
       return PlayerCounter++;
    }
    else if(score === "you lose, paper beats rock"|| score === "you lose, scissor beats paper" || score === "you lose, scissor beats rock"){
      return compCounter ++;
    }
  
   }
  
function playRound(playerSelection, computerSelection){
  
  
  if(playerSelection === computerSelection){
    return "tie";

  }
   else if(playerSelection === 'rock' && computerSelection === 'scissor'){
     
    return "you win, Rock beats scissor";
   }
   else if(playerSelection === 'rock' && computerSelection === 'paper'){
   
    return "you lose, paper beats rock";
   }
   else if(playerSelection === 'paper' && computerSelection === 'rock'){
    
    return "you win, paper beats rock";
   }
   else if(playerSelection === 'paper' && computerSelection === 'scissor'){
    
    return "you lose, scissor beats paper";
   }
   else if(playerSelection === 'scissor' && computerSelection === 'paper'){
    
    return "you win, scissor beats paper";
   }
   else if(playerSelection === 'scissor' && computerSelection === 'rock' ){
    
    return "you lose, scissor beats rock"; 

   }
   else {
    return null;
   }
   

  }

  function game(){
    playerSelection = getPlayerChoice();
  computerSelection = getComputerChoice();
  
  
  playRound(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
  getScore();
  if(playerCounter > compCounter){
    console.log("Congratulaions, you are the winner");
  }
  else if(playercounter < compCounter){
    console.log("sorry, you lost the game");
  }
  else{
    console.log("it's a tie ,match");
  }
  
  

  }
  
  
  console.log(game());
  
  

  