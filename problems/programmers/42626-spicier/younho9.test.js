const solution = require('./younho9');

describe('42626-spicier', () => {
    it('test 1', () => {
        const scoville = [1, 2, 3, 9, 10, 12];
        const K = 7;
        const result = 2;
        expect(solution(scoville, K)).toEqual(result);
    });
});
