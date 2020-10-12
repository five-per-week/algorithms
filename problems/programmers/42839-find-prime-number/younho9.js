function solution(numbers) {
    const primeNumbers = new Set();

    for (let i = 1; i <= numbers.length; i++) {
        getPermutation(numbers.split(''), i)
            .map(Number)
            .forEach((number) => {
                if (isPrime(number)) {
                    primeNumbers.add(number);
                }
            });
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

function isPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

module.exports = solution;
