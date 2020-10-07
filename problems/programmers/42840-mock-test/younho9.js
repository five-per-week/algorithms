function solution(answer) {
    const person1 = [1, 2, 3, 4, 5];
    const person2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    const score = [0, 0, 0];

    answer.forEach((n, i) => {
        if (person1[i % person1.length] === n) {
            score[0]++;
        }
        if (person2[i % person2.length] === n) {
            score[1]++;
        }
        if (person3[i % person3.length] === n) {
            score[2]++;
        }
    });

    return score.reduce((best, cur, idx) => {
        const bestPerson = best.pop();
        if (!bestPerson || cur > score[bestPerson - 1]) {
            return [idx + 1];
        }
        best.push(bestPerson);
        if (cur === score[bestPerson - 1]) {
            best.push(idx + 1);
        }
        return best;
    }, []);
}

module.exports = solution;
