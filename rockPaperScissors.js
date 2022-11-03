console.log('hi');

// event listeners to all the buttons
document.getElementById('rock').addEventListener('click', function () {
    rockPaperScissors('rock');
});
document.getElementById('paper').addEventListener('click', function () {
    rockPaperScissors('paper');
});
document.getElementById('scissors').addEventListener('click', function () {
    rockPaperScissors('scissors');
});

// rock > scissors > paper > rock
function rockPaperScissors(user1) {
    let result = document.getElementById('result');
    let user2 = options[Math.floor(Math.random() * options.length)];
    document.getElementById('machinePick').innerHTML = user2;
    console.log(user1, user2);
    if (user1 == user2) {
        result.innerHTML = 'DRAW!';
    } else if (user1 === 'rock' && user2 === 'scissors') {
        result.innerHTML = 'You won!';
    } else if (user1 === 'rock' && user2 === 'paper') {
        result.innerHTML = 'Machine won!';
    } else if (user1 === 'paper' && user2 === 'rock') {
        result.innerHTML = 'You won!';
    } else if (user1 === 'paper' && user2 === 'scissors') {
        result.innerHTML = 'Machine won!';
    } else if (user1 === 'scissors' && user2 === 'rock') {
        result.innerHTML = 'Machine won!';
    } else if (user1 === 'scissors' && user2 === 'paper') {
        result.innerHTML = 'You won!';
    }
};

const options = ['rock', 'paper', 'scissors'];

// console.log(rockPaperScissors(user));

// get the value of a button click
// document.getElementById('rock').addEventListener('click', function() {
//     console.log('rock');
// });

// document.getElementById('paper').addEventListener('click', function() {
//     console.log('paper');
// });

// document.getElementById('scissors').addEventListener('click', function() {
//     console.log('scissors');
// });
