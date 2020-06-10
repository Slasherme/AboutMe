
'use strict';
var correct=0, attempt = 0, attempt2=0;
var userName =  prompt('What is your name?');
function question1() {
  var iceCream = prompt('Welcome '+ userName +'! Let me ask you some questions, Do you think I like ice-cream?(Y/N)').toUpperCase();

  if(iceCream === 'Y'){
    alert('You\'re right, I could spend my whole life eating only ice-cream');
    correct++;
    //console.log("You're right, I could spend my whole life eating only ice-cream");
  } else if (iceCream === 'N') {
    alert('Are you serious? who does\'nt like ice cream!!!');
    //console.log('Are you serious? who does\'nt like ice cream!!!');
  }else {
    alert('You should answer with Y or N');
    //console.log('You should answer with Y or N');
  }
  
}
question1();
function question2() {
var travel = prompt('Do I like to travel?(Y/N)').toUpperCase();

if(travel === 'Y'){
  alert('right, I love travelling');
  correct++;
  //console.log("right, I love travelling");
} else if (travel === 'N') {
  alert('Well, you don\'t know me then');
  //console.log('Well, you don\'t know me then');
}else {
  alert('You should answer with Y or N');
  //console.log('You should answer with Y or N');
}
}
question2();
function question3() {
var city = prompt('Do you think I live in a famous city?(Y/N)').toUpperCase();

if(city === 'Y'){
  alert('Correct!, I live in Gaza, which is always on the news');
  correct++;
  //console.log("Correct!, I live in Gaza, which is always on the news");
} else if (city === 'N') {
  alert('Think again buddy');
  //console.log('Think again buddy');
}else {
  alert('You should answer with Y or N');
  //console.log('You should answer with Y or N');
}
}
question3();
function question4() {
var study = prompt('Have I ever been to college?(Y/N)').toUpperCase();

if(study === 'Y'){
  alert('Yes, I hold a bachelor\'s degree in Engineering');
  correct++;
  //console.log("Yes, I hold a bachelor's degree in Engineering");
} else if (study === 'N') {
  alert('Why would you assume that?!!');
  //console.log('Why would you assume that?!!');
}else {
  alert('You should answer with Y or N');
  //console.log('You should answer with Y or N');
}
}
question4();
function question5() {
var rich = prompt('I am a millionaire, do you think I\'m lying?(Y/N)').toUpperCase();

if(rich === 'Y'){
  alert('right, maybe one day');
  correct++;
  //console.log("right, maybe one day");
} else if (rich === 'N') {
  alert('lol, do you need some money?');
  //console.log('lol, do you need some money?');
}else {
  alert('You should answer with Y or N');
  //console.log('You should answer with Y or N');
}
}
question5();
function question6() {

var luckyNo = Math.floor(Math.random() * 100);

do{
  var lucky =  prompt('What is my lucky number?(Answer with a number)');
  var guess= parseInt(lucky);
  if(guess > luckyNo){
    alert('Too high, Try again!');
  } else if(guess < luckyNo) {
    alert('Too low, Try again!');
  } else if(guess === luckyNo){
    alert('Correct');
    correct++;
  }
  attempt++;
} while(attempt<4);

if(attempt === 4){
  alert('Actually, my lucky number is '+ luckyNo);
}
}
question6();
function question7() {

var arr = ['sherlock','hannibal','prison break','ordeal by innocence',
  'breaking bad','game of thrones','the last kingdom','house','the mentalist','modern family'];
do{
  var shows =  prompt('Guess one of my favorite TV shows.').toLowerCase();
  for(var i=0; i < arr.length; i++){
    if(shows === arr[i]){
      attempt2=6;
      correct++;
      alert('Great, That\'s one of them');
      alert('My favorite TV shows are '+ arr);
      break;
    }
  }
  attempt2++;
} while(attempt2<6);

if(attempt2===6){
  alert('My favorite TV shows are '+ arr);
}

alert('Well Done '+ userName + ' You have answered ' + correct + ' Questions correctly!');
}question7();