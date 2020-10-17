const solution = require('./younho9');

describe('43162-network', () => {
    it('test 1', () => {
        const n = 3;
        const computers = [
            [1, 1, 0],
            [1, 1, 0],
            [0, 0, 1],
        ];
        const result = 2;
        expect(solution(n, computers)).toEqual(result);
    });
    it('test 2', () => {
        const n = 3;
        const computers = [
            [1, 1, 0],
            [1, 1, 1],
            [0, 1, 1],
        ];
        const result = 1;
        expect(solution(n, computers)).toEqual(result);
    });
});
