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

let playerCounter = 0;
  let compCounter = 0;


function playRound(playerSelection, computerSelection){
  
  
  if(playerSelection === computerSelection){
    console.log("------------------");
    return " Looks like its a tie";

  }
   else if(playerSelection === 'rock' && computerSelection === 'scissor'){
     playerCounter++;
     console.log("------------------")
    return  `computer: ${computerSelection}  
you win, rock beats scissor`;
   }
   else if(playerSelection === 'rock' && computerSelection === 'paper'){
      compCounter++;
      console.log("------------------")
    return `computer: ${computerSelection}    
you lose, paper beats rock`;
   }
   else if(playerSelection === 'paper' && computerSelection === 'rock'){
    playerCounter++;
    console.log("------------------")
    return `computer: ${computerSelection}   
you win, paper beats rock`;
   }
   else if(playerSelection === 'paper' && computerSelection === 'scissor'){
    compCounter++;
    console.log("------------------")
    return `computer: ${computerSelection}   
you lose, scissor beats paper`;
   }
   else if(playerSelection === 'scissor' && computerSelection === 'paper'){
    playerCounter++;
    console.log("------------------");
    return `computer: ${computerSelection}   
you win, scissor beats paper`;
   }
   else if(playerSelection === 'scissor' && computerSelection === 'rock' ){
    compCounter++;
    console.log("------------------")
    return `computer: ${computerSelection}   
you lose, rock beats scissor`; 

   }
   
  }
  
 
  function game(){
   
    
  //  playerSelection = getPlayerChoice();
  // computerSelection = getComputerChoice();
 console.log(playRound(getPlayerChoice(), getComputerChoice()));
 console.log(playRound(getPlayerChoice(), getComputerChoice()));
 console.log(playRound(getPlayerChoice(), getComputerChoice()));
 console.log(playRound(getPlayerChoice(), getComputerChoice()));
 console.log(playRound(getPlayerChoice(), getComputerChoice()));
 console.log("------------------");
 if(playerCounter > compCounter){
  console.log("**you are the winner of the match**")
 }
 else if(compCounter > playerCounter){
  console.log("**you lose, Computer Beats you**")
 }
 else {
  console.log("**TIE**")
 }
  
  
   
  
}
  game();
  
  
  
  
  
  
  
  
  
 
  
  
  
 
  
  
  
  
 
  
   
  
 
  
  