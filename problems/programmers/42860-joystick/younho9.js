function solution(name) {
    const dirties = [...name].map((ch) => ch !== 'A');
    const positions = dirties.reduce(
        (map, cur, i) => (cur ? new Map([...map, [i, i]]) : map),
        new Map(),
    );

    const length = name.length;
    let curPosition = 0;
    let move = 0;

    while (true) {
        move += findLeastAlphabetMove(name[curPosition]);
        positions.delete(curPosition);

        if (!positions.size) {
            break;
        }

        let leastDistance = length;
        let nextPosition = curPosition;

        positions.forEach((position) => {
            const distance = Math.min(
                Math.abs(curPosition + length - position),
                Math.abs(position - curPosition),
            );

            if (distance < leastDistance) {
                leastDistance = distance;
                nextPosition = position;
            }
        });

        curPosition = nextPosition;
        move += leastDistance;
    }

    return move;
}

const range = (start, stop, step) =>
    Array.from(
        { length: (stop - start) / step + 1 },
        (_, i) => start + i * step,
    );

const findLeastAlphabetMove = (target) => {
    const alphabets = new Map(
        range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1)
            .map((x) => String.fromCharCode(x))
            .map((v, i) => [v, i]),
    );

    const targetPosition = alphabets.get(target);

    return alphabets.size / 2 > targetPosition
        ? targetPosition
        : alphabets.size - targetPosition;
};

module.exports = solution;
