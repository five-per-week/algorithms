const solution = require('./younho9');

describe('42579-best-album', () => {
    it('test 1', () => {
        const genres = ['classic', 'pop', 'classic', 'classic', 'pop'];
        const plays = [500, 600, 150, 800, 2500];
        const result = [4, 1, 3, 0];
        expect(solution(genres, plays)).toEqual(result);
    });
});
