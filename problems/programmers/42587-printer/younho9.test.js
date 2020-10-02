const solution = require('./younho9');

describe('42587-printer', () => {
    it('test 1', () => {
        const priorities = [2, 1, 3, 2];
        const location = 2;
        const result = 1;
        expect(solution(priorities, location)).toEqual(result);
    });
    it('test 2', () => {
        const priorities = [1, 1, 9, 1, 1, 1];
        const location = 0;
        const result = 5;
        expect(solution(priorities, location)).toEqual(result);
    });
});
