const solution = require('./younho9');

describe('42840-mock-test', () => {
    it('test 1', () => {
        const answer = [1, 2, 3, 4, 5];
        const result = [1];
        expect(solution(answer)).toEqual(result);
    });
    it('test 2', () => {
        const answer = [1, 3, 2, 4, 2];
        const result = [1, 2, 3];
        expect(solution(answer)).toEqual(result);
    });
});
