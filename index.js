const readlineSync = require("readline-sync");

function welcome(){
const name =readlineSync.question("What is your good name ? \n");
console.log(`Welcome ${name} !`);
console.log("-------------------------------------------------")
console.log("Lets play the Cricket Quiz: ");
}

const questions =[
  {
    ques:"Q1. How many players are there in one team ?\n \ta:10\n\tb:5\n\tc:11\nAns:",
    ans: "c"
  },
{
  ques:"Q2. Number of balls per over ?\n \ta:6 \n\tb:8 \n\tc:10\nAns:",
  ans:"a"
},
  {
    ques:"Q3. Maximum runs a player can score in a ball ?\n \ta:6\n\tb:4\n\tc:7\nAns:",
    ans:"c"
  },
  {
    ques:"Q4. How many days a test match is played ?\n \ta:3\n\tb:5\n\tc:4\nAns:",
      ans:"b"
  },
  {
    ques:"Q5. Who is consider the god of cricket ?\n \ta:Don Bradman \n\tb:Sachin Tendulkar \n\tc:Virat Kohli\nAns:",
    ans:"b"
  }
];

const highScores=[{
  name:"Rohan",
  score:5
},
{
 name:"Rahul",
 score:4
}
  ];

var currentScore=0;

function play(ques,ans){
  var userAns = readlineSync.question(ques);

  if(userAns.toUpperCase()===ans.toUpperCase()){
    console.log("Sahi Jawab!!");
    currentScore++;
  }else{
    console.log("Galat Jawab");
  }
  console.log("Current Score : ",currentScore);
  console.log("--------------------------------");
}

function game(){
  questions.forEach(item=>{
    play(item.ques,item.ans)
  })
}

function showScore(){
  console.log("Your Final Score:",currentScore);
  console.log("Checkout the high scores: ")
  highScores.forEach(score=>console.log(score.name," : ",score.score))
}

welcome();
game();
showScore();

