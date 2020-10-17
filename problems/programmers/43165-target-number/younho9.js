function solution(numbers, target) {
    return dfs(numbers, target);
}

function dfs(numbers, target) {
    if (!numbers.length) {
        return target === 0 ? 1 : 0;
    }

    const lastNumber = numbers.pop();

    return (
        dfs([...numbers], target - lastNumber) +
        dfs([...numbers], target + lastNumber)
    );
}

module.exports = solution;
