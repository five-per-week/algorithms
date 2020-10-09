Set.prototype.difference = function (setB) {
    let difference = new Set(this);
    for (let elem of setB) {
        difference.delete(elem);
    }
    return difference;
};

function solution(n, lost, reserve) {
    const reserveSet = new Set(reserve).difference(new Set(lost));
    const lostSet = new Set(lost).difference(new Set(reserve));

    reserveSet.forEach((i) => {
        if (lostSet.has(i - 1)) {
            lostSet.delete(i - 1);
        } else if (lostSet.has(i + 1)) {
            lostSet.delete(i + 1);
        }
    });

    return n - lostSet.size;
}

module.exports = solution;
