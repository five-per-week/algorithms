const solution = require('./younho9');

describe('42862-training-clothes', () => {
    it('test 1', () => {
        const n = 5;
        const lost = [2, 4];
        const reserve = [1, 3, 5];
        const result = 5;
        expect(solution(n, lost, reserve)).toEqual(result);
    });
    it('test 2', () => {
        const n = 5;
        const lost = [2, 4];
        const reserve = [3];
        const result = 4;
        expect(solution(n, lost, reserve)).toEqual(result);
    });
    it('test 3', () => {
        const n = 3;
        const lost = [3];
        const reserve = [1];
        const result = 2;
        expect(solution(n, lost, reserve)).toEqual(result);
    });
    it('test 4', () => {
        const n = 3;
        const lost = [3];
        const reserve = [3];
        const result = 3;
        expect(solution(n, lost, reserve)).toEqual(result);
    });
});
