let word = 'whatever aned ever we are going to be together';

function waleTalk() {
    // word.forEach(console.log("1"));
    let word = document.getElementById('text').value;
    console.log(word);
    let wordList = word.toLowerCase().split('');
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let waleWord = [];
    wordList.forEach(e => {
        if (vowels.includes(e)) {
            if (['u', 'e'].includes(e)) {
                waleWord.push(e.repeat(2));
            }
            else {
                waleWord.push(e)
            }
        }
    }
    )

    document.getElementById('results').innerHTML = waleWord.join('').toUpperCase();
};

console.log(waleTalk());