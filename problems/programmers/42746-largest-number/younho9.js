function solution(numbers) {
    const result = numbers
        .map((number) => number.toString())
        .sort((a, b) => b.concat(a) - a.concat(b))
        .join('');

    if (result[0] === '0') {
        return '0';
    }

    return result;
}

module.exports = solution;
