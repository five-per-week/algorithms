function solution(citations) {
    citations.sort((a, b) => a - b);
    let h = citations.length;

    for (let i = 0; i < citations.length; i++) {
        if (citations[i] >= h) {
            return h;
        } else {
            h--;
        }
    }

    return h;
}

module.exports = solution;
