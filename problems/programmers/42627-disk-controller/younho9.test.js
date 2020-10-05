const solution = require('./younho9');

describe('42627-disk-controller', () => {
    it('test 1', () => {
        const jobs = [
            [0, 3],
            [1, 9],
            [2, 6],
        ];
        const result = 9;
        expect(solution(jobs)).toEqual(result);
    });
});
