const solution = (clothes) =>
    Object.values(
        clothes.reduce((acc, cur) => {
            acc[cur[1]] = (acc[cur[1]] || 1) + 1;
            return acc;
        }, {}),
    ).reduce((acc, cur) => (acc === 0 ? acc + cur : acc * cur), 0) - 1;

module.exports = solution;
