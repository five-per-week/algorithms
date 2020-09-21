function solution(clothes) {
    const hashMap = clothes.reduce(
        (acc, cur) => acc.set(cur[1], (acc.get(cur[1]) || 1) + 1),
        new Map(),
    );

    let answer =
        [...hashMap.values()].reduce(
            (acc, cur, idx) => (idx === 0 ? acc + cur : acc * cur),
            0,
        ) - 1;

    return answer;
}

module.exports = solution;
