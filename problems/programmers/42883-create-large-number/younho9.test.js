const solution = require('./younho9');

describe('42883-create-large-number', () => {
    it('test 1', () => {
        const number = '1924';
        const k = 2;
        const result = '94';
        expect(solution(number, k)).toEqual(result);
    });
    it('test 2', () => {
        const number = '1231234';
        const k = 3;
        const result = '3234';
        expect(solution(number, k)).toEqual(result);
    });
    it('test 3', () => {
        const number = '4177252841';
        const k = 4;
        const result = '775841';
        expect(solution(number, k)).toEqual(result);
    });
});
