var readlineSync = require("readline-sync")
console.log("Hi Mate!!! Good Day!!!");
var userName = readlineSync.question("What do your friends call you :");
console.log("Hey "+ userName +" Good Day!");
console.log("Lets have a fun game how well do you know me");
var score=0;
var wrong=0;
var highestScoreUser={name:"",result:0};

function Quiz(Question,Answer){
  console.log('......')
var userAnswer=readlineSync.question(Question)
if(userAnswer.toUpperCase()===Answer.toUpperCase()){
  console.log("You have Given Right answer");
  score=score+1;
  if(score===4 && wrong ===0){
    console.log("Your are 1 point near to reach the level 2 Quiz!!! ");
  }
}else{
  wrong=wrong-1;
  console.log("You have Given wrong answer");
}
}
var quizQuestions=[{question:"What is my nick name: ",answer:"Pandu"},{question:"What is my favourite sport: ",answer:"cricket"},{question:"What is my dream phone: ",answer:"iphone"},{question:"What is my favourite dish: ",answer:"biryani"},{question:"When is my birthday: ",answer:"feb5th"}]
for(var i=0;i<quizQuestions.length;i++){
  Quiz(quizQuestions[i].question,quizQuestions[i].answer)
}
console.log("Your Final Score is :"+score);
if(score>highestScoreUser.result){
  highestScoreUser.name=userName;
  highestScoreUser.result=score;
}
console.log(".................................................");
console.log("-----Highest Score of the quiz event Till Now!!-----");
console.log(highestScoreUser.name+" with score "+highestScoreUser.result);
console.log("------Thank you------");