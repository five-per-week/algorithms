function solution(genres, plays) {
    const hashMap = genres.reduce((hash, genre, i) => {
        if (hash.has(genre)) {
            const info = hash.get(genre);
            if (plays[info.first] < plays[i]) {
                info.second = info.first;
                info.first = i;
            } else if (info.second === null || plays[info.second] < plays[i]) {
                info.second = i;
            }
            info.sum += plays[i];
        } else {
            hash.set(genre, {
                first: i,
                second: null,
                sum: plays[i],
            });
        }
        return hash;
    }, new Map());

    return [...hashMap.values()]
        .sort((a, b) => b.sum - a.sum)
        .reduce(
            (album, genre) =>
                genre.second === null
                    ? [...album, genre.first]
                    : [...album, genre.first, genre.second],
            [],
        );
}

module.exports = solution;
