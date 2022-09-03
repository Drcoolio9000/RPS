let intro = "Let's play Rock, Paper, Scissors!"
console.log(intro)

//Randomly Generate a Number between 1 and 3
var random1 = Math.floor(Math.random() * 3) + 1;
var random2 = Math.floor(Math.random() * 3) + 1;

//Assign 1 to Rock, 2 to Paper, and 3 to Scissors for both players.
function PlayerChoice(i) {
    var dict = ["Rock", "Paper", "Scissors"]
    return dict[i - 1];
}

//Output Choices
var player1 = PlayerChoice(random1)
var player2 = PlayerChoice(random2)
console.log("Player1 chose " + player1)
console.log("Player2 chose " + player2)

//Declare Winner
function Result(random1, random2) {
    var Ties = "Ties"
    var Wins = "Wins"
    var Loses = "Loses"
    if (random1 == random2) return (Ties);
    if (random1 == "Rock" && random2 == "Scissors") return ("Player 1 " + Wins);
    if (random1 == "Scissors" && random2 == "Paper") return ("Player 1 " + Wins);
    if (random1 == "Paper" && random2 == "Rock") return ("Player 1 "+ Wins);
    return ("Player 1 " + Loses);
}
console.log(Result(player1, player2))