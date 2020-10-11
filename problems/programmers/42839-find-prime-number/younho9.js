function solution(numbers) {
    let primeNumbers = new Set();

    for (let i = 1; i <= numbers.length; i++) {
        primeNumbers = new Set([
            ...primeNumbers,
            ...getPermutation(numbers.split(''), i).map(Number),
        ]);
    }

    const max = Math.max(...primeNumbers);
    primeNumbers.delete(0);
    primeNumbers.delete(1);

    for (let i = 2; i * i <= max; i++) {
        for (let j = i * i; j <= max; j += i) {
            primeNumbers.delete(j);
        }
    }

    return primeNumbers.size;
}

function getPermutation(arr, n) {
    if (n === 1) {
        return arr;
    }

    return arr.reduce((perms, cur, idx) => {
        getPermutation(
            [...arr.slice(0, idx), ...arr.slice(idx + 1)],
            n - 1,
        ).forEach((perm) => {
            perms.push(cur + perm);
        });

        return perms;
    }, []);
}

module.exports = solution;
