function solution(brown, yellow) {
    // (x * 2) + (y * 2) - 4 = brown;
    // (x - 2) * (y - 2) = yellow;
    // x * y = brown + yellow

    return findFactorPairs(brown + yellow).reduce((_, [x, y], __, pairs) => {
        if (x * 2 + y * 2 - 4 === brown && (x - 2) * (y - 2) === yellow) {
            pairs.splice(0);
            return [x, y];
        }
    }, []);
}

function findFactorPairs(number) {
    const pairs = [[number, 1]];

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            pairs.push([number / i, i]);
        }
    }

    return pairs;
}

module.exports = solution;
