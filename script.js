//setting random number
const randomNumber1 = Math.floor(Math.random(1,6)* 6) + 1;

//getting img by concatinating
const firstDiceImg = 'images/dice' +  randomNumber1 + '.png';

//select img of user1
var image1 = document.querySelectorAll('img')[0].setAttribute('src', firstDiceImg);


//setting random number
const randomNumber2 = Math.floor(Math.random(1,6)* 6) + 1;

//getting img by concatinating
const secondeDiceImg = 'images/dice' +  randomNumber2 + '.png';

//select img of user1
var image2 = document.querySelectorAll('img')[1].setAttribute('src', secondeDiceImg);