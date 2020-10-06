const solution = require('./younho9');

describe('42746-largest-number', () => {
    it('test 1', () => {
        const numbers = [6, 10, 2];
        const result = '6210';
        expect(solution(numbers)).toEqual(result);
    });
    it('test 2', () => {
        const numbers = [3, 30, 34, 5, 9];
        const result = '9534330';
        expect(solution(numbers)).toEqual(result);
    });
    it('test 3', () => {
        const numbers = [0, 30, 34, 5, 9];
        const result = '9534300';
        expect(solution(numbers)).toEqual(result);
    });
    it('test 4', () => {
        const numbers = [9999, 9998, 9899, 9989, 9, 999, 998, 99];
        const result = '9999999999999899899989899';
        expect(solution(numbers)).toEqual(result);
    });
    it('test 5', () => {
        const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const result = '987654321100';
        expect(solution(numbers)).toEqual(result);
    });
    it('test 6', () => {
        const numbers = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 100];
        const result = '19181716151413121110100';
        expect(solution(numbers)).toEqual(result);
    });
    it('test 7', () => {
        const numbers = [40, 403];
        const result = '40403';
        expect(solution(numbers)).toEqual(result);
    });
    it('test 8', () => {
        const numbers = [0, 0, 9];
        const result = '900';
        expect(solution(numbers)).toEqual(result);
    });
    it('test 9', () => {
        const numbers = [0, 0, 0];
        const result = '0';
        expect(solution(numbers)).toEqual(result);
    });
});
