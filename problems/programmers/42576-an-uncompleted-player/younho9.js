function solution(participant, completion) {
    const hashMap = completion.reduce((acc, cur) => {
        acc.has(cur) ? acc.set(cur, acc.get(cur) + 1) : acc.set(cur, 1);
        return acc;
    }, new Map());

    return participant.find((person) => {
        if (hashMap.get(person)) {
            hashMap.set(person, hashMap.get(person) - 1);
        } else {
            return true;
        }
    });

    return answer;
}

module.exports = solution;
