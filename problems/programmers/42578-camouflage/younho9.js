const solution = (clothes) =>
    [
        ...clothes
            .reduce(
                (acc, cur) => acc.set(cur[1], (acc.get(cur[1]) || 1) + 1),
                new Map(),
            )
            .values(),
    ].reduce((acc, cur) => (acc === 0 ? acc + cur : acc * cur), 0) - 1;

module.exports = solution;
