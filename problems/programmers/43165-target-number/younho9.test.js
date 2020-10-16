const solution = require('./younho9');

describe('43165-target-number', () => {
    it('test 1', () => {
        const numbers = [1, 1, 1, 1, 1];
        const target = 3;
        const result = 5;
        expect(solution(numbers, target)).toEqual(result);
    });
});
