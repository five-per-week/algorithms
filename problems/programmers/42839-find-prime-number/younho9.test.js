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
    it('7자리 수 테스트', () => {
        const numbers = '1234567';
        const result = 1336;
        expect(solution(numbers)).toEqual(result);
    });
    it('8자리 수 테스트', () => {
        const numbers = '12345678';
        const result = 5056;
        expect(solution(numbers)).toEqual(result);
    });
    it('9자리 수 테스트', () => {
        const numbers = '123456789';
        const result = 43089;
        expect(solution(numbers)).toEqual(result);
    });
    it('10자리 수 테스트', () => {
        const numbers = '1234567890';
        const result = 283086;
        expect(solution(numbers)).toEqual(result);
    });
});
