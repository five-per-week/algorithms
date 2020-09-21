const solution = require('./younho9');

describe('1번', () => {
    it('test 1', () => {
        const phone_book = ['119', '97674223', '1195524421'];
        const result = false;
        expect(solution(phone_book)).toEqual(result);
    });
    it('test 2', () => {
        const phone_book = ['123', '456', '789'];
        const result = true;
        expect(solution(phone_book)).toEqual(result);
    });
    it('test 3', () => {
        const phone_book = ['12', '123', '1235', '567', '88'];
        const result = false;
        expect(solution(phone_book)).toEqual(result);
    });
});
