function solution(priorities, location) {
    const waiting = priorities.map((_, idx) => idx);
    const finished = [];

    while (priorities.length) {
        const cur = priorities.shift();
        const curIdx = waiting.shift();
        if (priorities.some((priority) => priority > cur)) {
            priorities.push(cur);
            waiting.push(curIdx);
            continue;
        }
        finished.push(curIdx);
    }

    return finished.findIndex((el) => el === location) + 1;
}

module.exports = solution;
