const chalk = require('chalk');
// Used to take User input 
var readlineSync = require('readline-sync');
// Welcoming the user.
function Welcome()
{
var userName= readlineSync.question(chalk.yellowBright("Please Enter Your Name?"));
console.log(chalk.bgCyan('WELCOME '+userName+ ' How Much You know India ?\n'));
console.log(chalk.bgCyan('************ Lets Begin with Quiz **********'));
}
// Arrays of objects for questions and answers
var quesBank= [
	{
		question: `
	What Indian city is the capital of two states?
	a) Delhi
	b) Chandigarh
	c) Mumbai\n`,
		answer: "b"
	},
	{
        question: `
	How many countries border India?
	a) 6
	b) 14
  c) 9\n`,
		answer: "a"
	},
	{
		question: `
	What is the capital of Gujarat?
	a) Gandhi Nagar
	b) Indira Nagar
	c) Surat\n`,
		answer: "a"
	},
  {
		question: `
	What, approximately, is the area of India, in square kilometers?
	a) 1000000000
	b) 3000000
	c) 25000000\n`,
		answer: "b"
	},
];
//High Score Array objects
var highScore=
[
  {
    name: "Rishi",
    score:0
  },
  {
    name:"Sameep",
    score:4
  }
]

var point=0;
// function to check the user answers is right..
function check(question,answer)
{
  var userAns=readlineSync.question(question);
  if( userAns.toUpperCase() == answer.toUpperCase())
  {
    console.log(chalk.green.bold("Your are Right"));
    point=point+1;
  }
  else
  {
    console.log(chalk.red.bold("Your Wrong"));
   
  }
  console.log("Current score: ", point);
  console.log(chalk.yellowBright("****************************************************"));
}

// for loop to access array of objects and print scores of Users
function game()
{
  for(var i = 0;i<quesBank.length;i++)
  { 
    var currentQue =quesBank[i];
    check(currentQue.question,currentQue.answer);
  }
  //console.log('*******************************');
  console.log(chalk.red ('Thanks for PLAYING \nYour Score is: ', point));
  console.log(chalk.yellowBright("****************************************************"));
  console.log(chalk.yellow.bold(("Check Out Highest Scores of All Users")));

  for (var i = 0; i < highScore.length; i++) 
  {
    var max= highScore[i];
    console.log(chalk.blue.bold(max.name,max.score));
  }

  
}
// for loop to check if high score is Beaten
function high()
{
  for(var i=0;i<highScore.length;i++)
{
  var curr = highScore[i];
  if(curr.score<point)
  {
    console.log(chalk.yellowBright('Congratulations! You have Beaten '+ curr.name + " " +"in Avengers Quiz"));
  }
}
}
Welcome()
game() 
high()