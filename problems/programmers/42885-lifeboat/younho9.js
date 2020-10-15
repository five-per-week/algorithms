function solution(people, limit) {
    const boats = [];

    people
        .sort((a, b) => b - a)
        .forEach((heavyPerson) => {
            let remaining = limit - heavyPerson;

            if (people[people.length - 1] <= remaining) {
                remaining -= people.pop();
            }

            boats.push(remaining);
        });

    return boats.length;
}

module.exports = solution;
