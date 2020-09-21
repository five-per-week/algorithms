function solution(phone_book) {
    let answer = true;

    phone_book
        .sort()
        .slice(0)
        .reduce((short, long, _, arr) => {
            if (long.startsWith(short)) {
                answer = false;
                arr.splice(1);
            }
            return long;
        });

    return answer;
}

module.exports = solution;
