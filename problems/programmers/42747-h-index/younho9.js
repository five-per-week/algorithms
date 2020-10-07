function solution(citations) {
    return citations
        .sort((a, b) => a - b)
        .slice()
        .reduce((h, cur, _, arr) => {
            if (cur >= h) {
                arr.splice(1);
                return h;
            }
            return --h;
        }, citations.length);
}

module.exports = solution;
