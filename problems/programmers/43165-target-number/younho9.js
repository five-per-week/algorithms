function solution(numbers, target) {
    return bfs(numbers, target);
}

function bfs(numbers, target) {
    const clone = [...numbers];

    if (clone.length === 1) {
        return Number(clone[0] === target || clone[0] === -target);
    }

    const lastNumber = clone.pop();

    return bfs(clone, target - lastNumber) + bfs(clone, target + lastNumber);
}

module.exports = solution;
