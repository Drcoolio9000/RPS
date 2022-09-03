let intro = "Let's play Rock, Paper, Scissors!"
console.log(intro)

//Randomly Generate a Number between 1 and 3
var random1 = Math.floor(Math.random() * 3) + 1;
var random2 = Math.floor(Math.random() * 3) + 1;

//Assign 1 to Rock, 2 to Paper, and 3 to Scissors for Player1
function Player1() {
  if (random1 == 1) {
     random1 = "Rock";
  } else if (random1 == 2) {
     random1 = "Paper";
  } else if (random1 == 3) {
     random1 = "Scissors";
  }
return random1;
}

//Assign 1 to Rock, 2 to Paper, and 3 to Scissors for Player2
function Player2() {
    if (random2 == 1) {
       random2 = "Rock";
    } else if (random2 == 2) {
       random2 = "Paper";
    } else if (random2 == 3) {
       random2 = "Scissors";
    }
  return random2;
  }

//Output results.
Player1()
Player2()
console.log("Player1 chose" + " " + random1)
console.log("Player2 chose" + " " + random2)

//Declare Winner
function Result() {
var Ties = "Ties"
var Wins = "Wins"
var Loses = "Loses"
switch (Ties) {
    case 1: 
        random1 == "Rock" && random2 == "Rock"
           console.log(Ties);
    case 2:
        random1 == "Scissors" && random2 == "Scissors"
            console.log(Ties);
    case 3:
        random1 == "Paper" && random2 == "Paper"
            console.log(Ties);      
}
switch (Wins) {
    case 1:
        random1 == "Rock" && random2 == "Scissors"
           console.log("Player 1 " + Wins);
    case 2:
        random1 == "Scissors" && random2 == "Paper"
            console.log("Player 1 " + Wins);
    case 3:
        random1 == "Paper" && random2 == "Rock"
            console.log("Player 1 " + Wins);    
}
switch (Loses) {
    case 1:
        random1 == "Rock" && random2 == "Paper"
           console.log("Player 1 " + Loses);
    case 2:
        random1 == "Scissors" && random2 == "Rock"
            console.log("Player 1 " + Loses);
    case 3:
        random1 == "Paper" && random2 == "Scissors"
            console.log("Player 1 " + Loses);    
    }
}
Result(???)
console.log(???)