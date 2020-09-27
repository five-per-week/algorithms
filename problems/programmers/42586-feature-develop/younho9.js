function solution(progresses, speed) {
    const answer = [];

    const deploys = progresses
        .map((progress, i) => Math.ceil((100 - progress) / speed[i]))
        .reduce((deploys, feature) => {
            if (deploys.length === 0) {
                deploys.push(feature);
            } else if (deploys[0] >= feature) {
                deploys.push(feature);
            } else {
                answer.push(deploys.length);
                deploys = [feature];
            }
            return deploys;
        }, []);

    answer.push(deploys.length);

    return answer;
}

module.exports = solution;
