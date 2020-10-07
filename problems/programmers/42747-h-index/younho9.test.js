const solution = require('./younho9');

describe('42747-h-index', () => {
    it('test 1', () => {
        const citations = [3, 0, 6, 1, 5];
        const result = 3;
        expect(solution(citations)).toEqual(result);
    });
});
