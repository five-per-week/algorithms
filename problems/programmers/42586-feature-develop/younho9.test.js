const solution = require('./younho9');

describe('42586-feature-develop', () => {
    it('test 1', () => {
        const progresses = [93, 30, 55];
        const speeds = [1, 30, 5];
        const result = [2, 1];
        expect(solution(progresses, speeds)).toEqual(result);
    });
    it('test 2', () => {
        const progresses = [95, 90, 99, 99, 80, 99];
        const speeds = [1, 1, 1, 1, 1, 1];
        const result = [1, 3, 2];
        expect(solution(progresses, speeds)).toEqual(result);
    });
});
