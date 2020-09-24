const solution = require('./younho9');

describe('42584-stock-price', () => {
    it('test 1', () => {
        const prices = [1, 2, 3, 2, 3];
        const result = [4, 3, 1, 1, 0];
        expect(solution(prices)).toEqual(result);
    });
});
