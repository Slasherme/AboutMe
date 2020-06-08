
'use strict';
var userName =  prompt('What is your name?');
var iceCream = prompt('Welcome '+ userName +'! Let me ask you some questions, Do you think I like ice-cream?(Y/N)').toUpperCase();

if(iceCream === 'Y'){
  alert('You\'re right, I could spend my whole life eating only ice-cream');
  //console.log("You're right, I could spend my whole life eating only ice-cream");
} else if (iceCream === 'N') {
  alert('Are you serious? who does\'nt like ice cream!!!');
  //console.log('Are you serious? who does\'nt like ice cream!!!');
}else {
  alert('You should answer with Y or N');
  //console.log('You should answer with Y or N');
}

var travel = prompt('Do I like to travel?(Y/N)').toUpperCase();

if(travel === 'Y'){
  alert('right, I love travelling');
  //console.log("right, I love travelling");
} else if (travel === 'N') {
  alert('Well, you don\'t know me then');
  //console.log('Well, you don\'t know me then');
}else {
  alert('You should answer with Y or N');
  //console.log('You should answer with Y or N');
}

var city = prompt('Do you think I live in a famous city?(Y/N)').toUpperCase();

if(city === 'Y'){
  alert('Correct!, I live in Gaza, which is always on the news');
  //console.log("Correct!, I live in Gaza, which is always on the news");
} else if (city === 'N') {
  alert('Think again buddy');
  //console.log('Think again buddy');
}else {
  alert('You should answer with Y or N');
  //console.log('You should answer with Y or N');
}

var study = prompt('Have I ever been to college?(Y/N)').toUpperCase();

if(study === 'Y'){
  alert('Yes, I hold a bachelor\'s degree in Engineering');
  //console.log("Yes, I hold a bachelor's degree in Engineering");
} else if (study === 'N') {
  alert('Why would you assume that?!!');
  //console.log('Why would you assume that?!!');
}else {
  alert('You should answer with Y or N');
  //console.log('You should answer with Y or N');
}

var rich = prompt('I am a millionaire, do you think I\'m lying?(Y/N)').toUpperCase();

if(rich === 'Y'){
  alert('right, maybe one day');
  //console.log("right, maybe one day");
} else if (rich === 'N') {
  alert('lol, do you need some money?');
  //console.log('lol, do you need some money?');
}else {
  alert('You should answer with Y or N');
  //console.log('You should answer with Y or N');
}

alert('Well Done '+ userName);
