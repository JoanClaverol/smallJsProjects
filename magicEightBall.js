const positiveAnswers = ['It is certain', 'It is decidedly so', 'Without a doubt', 'Yes - definitely', 'You may rely on it', 'As I see it, yes', 'Most likely', 'Outlook good', 'Yes', 'Signs point to yes'];
const neutralAnswers = ['Reply hazy, try again', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again'];
const negativeAnswers = ['Don\'t count on it', 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful'];
const answers = [...positiveAnswers, ...neutralAnswers, ...negativeAnswers];

function getRandomAnswer() {
    let answer = answers[Math.floor(Math.random() * answers.length)];
    document.getElementById('answer').innerHTML = answer;
}