const solution = require('./younho9');

describe('42628-double-priority-queue', () => {
    it('test 1', () => {
        const operations = ['I 16', 'D 1'];
        const result = [0, 0];
        expect(solution(operations)).toEqual(result);
    });
    it('test 2', () => {
        const operations = ['I 7', 'I 5', 'I -5', 'D -1'];
        const result = [7, 5];
        expect(solution(operations)).toEqual(result);
    });
    it('test 3', () => {
        const operations = [
            'I 16',
            'I -5643',
            'D -1',
            'D 1',
            'D 1',
            'I 123',
            'D -1',
        ];
        const result = [0, 0];
        expect(solution(operations)).toEqual(result);
    });
    it('test 4', () => {
        const operations = [
            'I -45',
            'I 653',
            'D 1',
            'I -642',
            'I 45',
            'I 97',
            'D 1',
            'D -1',
            'I 333',
        ];
        const result = [333, -45];
        expect(solution(operations)).toEqual(result);
    });
    it('test 5', () => {
        const operations = [
            'I 1',
            'I 1',
            'D -1',
            'D 1',
            'I -642',
            'I -642',
            'D 1',
            'D -1',
            'I 45',
            'I 97',
            'D 1',
            'D -1',
        ];
        const result = [0, 0];
        expect(solution(operations)).toEqual(result);
    });
});
