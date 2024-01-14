function getComputerChoice() {
  let randomNum = Math.floor((Math.random() * 3) + 1);
  let choice;
  if (randomNum === 1) {
     choice = "rock";
  }
  else if (randomNum === 2) {
     choice = "paper";
  
}
else if (randomNum === 3) {
  choice =  "scissor";
}
return choice;
}

function playRound(playerSelection, computerSelection) {
      
      playerSelection = playerSelection.toLowerCase();
     
      if (playerSelection === computerSelection) {
         console.log("Looks like It's a tie");
      }
      else if (playerSelection === 'rock' && computerSelection === 'scissor') {
            console.log("You win, Rock beats Scissor");   
      }
      else if(playerSelection === 'rock' && computerSelection === 'paper') {
         console.log("You lose, paper beats Rock");
      }
      else if(playerSelection === 'paper' && computerSelection === 'rock') {
         console.log("You win, paper beats rock");  
          
      }
      else if(playerSelection === 'paper' && computerSelection === 'scissor'){
        console.log("You lose, scissor beats paper");
      }
      else if(playerSelection === 'scissor' && computerSelection === 'rock'){
        console.log("You lose, rock beats scissor");
      
      } 
      else if(playerSelection === 'scissor' && computerSelection === 'paper'){
        console.log("You win, scissor beats paper");
        
      }
      else {
        console.log("Invalid input ")
      }      
       
       }

      function game() {
  playerSelection = prompt("Choose your weapon");
  
  playRound(playerSelection, getComputerChoice());
  
}

 game();
 game();
 game();
 game();
 game();