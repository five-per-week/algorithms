function solution(number, k) {
    for (let i = 0; i < k; i++) {
        number = removeOneNumber(number);
    }

    return number;
}

function removeOneNumber(number) {
    return [...number].reduce((largeNumber, _, i, arr) => {
        const createdNumber = [...arr.slice(0, i), ...arr.slice(i + 1)].join(
            '',
        );
        return largeNumber < createdNumber ? createdNumber : largeNumber;
    }, 0);
}

module.exports = solution;
