console.log("welcome to rock paper scissors game!");

const options = ["rock",
                "paper",
                "scissors"] ;
computerSelection = Math.floor(Math.random() * options.length);
let computerPoints=0;
let playerPoints=0;

for (let i = 0; i < 5; i++){
  playerSelection=prompt("rock paper or scissors?");

  function gameRounds(){
if(playerSelection==computerSelection){
  console.log("tie! "+ "your answer is same with computer");

if(playerSelection=="rock"&&computerSelection=="scissors"){
  console.log("you win! "+playerSelection+" "+"beats "+computerSelection);
  playerPoints++;
}
if(computerSelection=="paper"&&computerSelection=="rock"){
  console.log("you lose! "+computerSelection+" "+"beats "+playerSelection);
  computerPoints++;
}
if(playerSelection=="scissors"&&computerSelection=="paper"){
  console.log("you win! "+playerSelection+" "+"beats "+computerSelection);
  playerPoints++;
}
if(computerSelection=="scissors"&&computerSelection=="rock"){
  console.log("you lose! "+computerSelection+" "+"beats "+playerSelection);
  computerPoints++;
}
if(playerSelection=="paper"&&computerSelection=="rock"){
  console.log("you win! "+playerSelection+" "+"beats "+computerSelection);
  playerPoints++;
}
if(computerSelection=="scissors"&&computerSelection=="paper"){
  console.log("you lose! "+computerSelection+" "+"beats "+playerSelection);
  computerPoints++;
}
}
  }
  gameRounds();
  function result(){
    if(computerPoints-playerPoints>1){
      console.log("you lost");
    }
    if(playerPoints-computerPoints>1){
      console.log("you are the champion");
    }
  }
  let winVal=Math.abs(computerPoints-playerPoints);
  
  if((winVal=1)||(winVal=0)){
    gameRounds();
    result();}
  else{
    result();
    
    


