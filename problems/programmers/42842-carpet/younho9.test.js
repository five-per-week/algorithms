const solution = require('./younho9');

describe('42842-carpet', () => {
    it('test 1', () => {
        const brown = 10;
        const yellow = 2;
        const result = [4, 3];
        expect(solution(brown, yellow)).toEqual(result);
    });
    it('test 2', () => {
        const brown = 8;
        const yellow = 1;
        const result = [3, 3];
        expect(solution(brown, yellow)).toEqual(result);
    });
    it('test 3', () => {
        const brown = 24;
        const yellow = 24;
        const result = [8, 6];
        expect(solution(brown, yellow)).toEqual(result);
    });
});
