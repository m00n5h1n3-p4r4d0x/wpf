// James West Expressions 10/10/13


//This script is going to calculate the average score for 5 rounds of golf

var round1 = prompt("Enter round 1 score")// enter the score of the first round of golf
var round2 = prompt("Enter round 2 score")// enter the score of your second round of golf
var round3 = prompt("Enter round 3 score")// enter the score of your third round of golf
var round4 = prompt("Enter round 4 score")// enter the score of your fourth round of golf
var round5 = prompt("Enter round 5 score")
var average = (Number(round1) + Number(round2) + Number(round3) + Number(round4) + Number(round5))/5

alert ("I played 5 rounds of golf with an average score of " + average)