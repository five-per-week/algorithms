function solution(answers) {
    const answer = [];

    const p1 = [1, 2, 3, 4, 5];
    const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    const s1 = answers.filter((a, i) => a === p1[i % p1.length]).length;
    const s2 = answers.filter((a, i) => a === p2[i % p2.length]).length;
    const s3 = answers.filter((a, i) => a === p3[i % p3.length]).length;
    const max = Math.max(s1, s2, s3);

    if (s1 === max) {
        answer.push(1);
    }
    if (s2 === max) {
        answer.push(2);
    }
    if (s3 === max) {
        answer.push(3);
    }

    return answer;
}

module.exports = solution;
