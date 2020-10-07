const solution = require('./younho9');

describe('42748-kth-number', () => {
    it('test 1', () => {
        const array = [1, 5, 2, 6, 3, 7, 4];
        const commands = [
            [2, 5, 3],
            [4, 4, 1],
            [1, 7, 3],
        ];
        const result = [5, 6, 3];
        expect(solution(array, commands)).toEqual(result);
    });
});
