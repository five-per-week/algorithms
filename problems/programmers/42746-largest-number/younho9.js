function solution(numbers) {
    const result = numbers.sort((a, b) => `${b}${a}` - `${a}${b}`).join('');
    return result[0] === '0' ? '0' : result;
}

module.exports = solution;
