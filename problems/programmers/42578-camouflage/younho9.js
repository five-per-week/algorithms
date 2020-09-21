function solution(clothes) {
    const hashMap = clothes.reduce(
        (acc, cur) => acc.set(cur[1], (acc.get(cur[1]) || 0) + 1),
        new Map(),
    );

    let answer = getAllCombinations([...hashMap.values()]).reduce(
        (acc, cur) =>
            acc +
            cur.reduce(
                (acc, cur, idx) => (idx === 0 ? acc + cur : acc * cur),
                0,
            ),
        0,
    );

    return answer;
}

const getKCombinations = (set, k) => {
    const results = [];
    if (k === 1) {
        return set.map((i) => [i]);
    }

    set.forEach((fixed, i, set) => {
        const combinations = getKCombinations(set.slice(i + 1), k - 1);
        results.push(
            ...combinations.map((combination) => [fixed, ...combination]),
        );
    });

    return results;
};

const getAllCombinations = (set) => {
    const results = [];
    for (let k = 1; k <= set.length; k++) {
        const kCombinations = getKCombinations(set, k);
        results.push(...kCombinations);
    }
    return results;
};

module.exports = solution;
