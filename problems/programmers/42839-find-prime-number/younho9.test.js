const solution = require('./younho9');

describe('42839-find-prime-number', () => {
    it('test 1', () => {
        const numbers = '17';
        const result = 3;
        expect(solution(numbers)).toEqual(result);
    });
    it('test 2', () => {
        const numbers = '011';
        const result = 2;
        expect(solution(numbers)).toEqual(result);
    });
});
