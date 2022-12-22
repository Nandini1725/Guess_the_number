'use strict';




let secretNumber = Math.trunc(Math.random()*20)+1;

let score = 20;
let highscore = 0;
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number (document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if(!guess){
        // document.querySelector('.message').textContent = 'No number😢';
        displayMessage('No Number!!');


    } else if (guess === secretNumber){
        displayMessage('Correct Answer 💯')

        document.querySelector('body').style.backgroundColor = '#60b374';
        document.querySelector('.number').style.width = '30rem';

        document.querySelector('.number').textContent = secretNumber;

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore; 
        }


    } else if(guess !== secretNumber){
        if(score>0){
            displayMessage(guess > secretNumber ? 'Too high 💹' : 'Too low💹');
            score --;
            document.querySelector('.score').textContent = score;
    
            } else {
                displayMessage('You lost the Game!😢');
                document.querySelector('.score').textContent = 0;
            }

    }
});

document.querySelector('.again').addEventListener('click' , function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;

    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
