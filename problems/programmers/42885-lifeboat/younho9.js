function solution(people, limit) {
    const boats = [];
    people
        .sort((a, b) => b - a)
        .forEach((heavyPerson) => {
            boats.push(limit - heavyPerson);

            if (people[people.length - 1] <= limit - heavyPerson) {
                people.pop();
            }
        });

    return boats.length;
}

module.exports = solution;
