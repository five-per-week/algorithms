function solution(people, limit) {
    const boats = [];

    people
        .sort((a, b) => b - a)
        .forEach((heavyPerson) => {
            const remaining = limit - heavyPerson;
            boats.push(remaining);

            if (people[people.length - 1] <= remaining) {
                people.pop();
            }
        });

    return boats.length;
}

module.exports = solution;
