const getNumber = (n) => {
    let result = document.getElementById('result');

    // set timeout of 1 second
    setTimeout(() => {
        result.innerHTML = n;
        getNumber(n - 1);
    }, 1000);

};