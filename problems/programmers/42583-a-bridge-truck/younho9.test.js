const solution = require('./younho9');

describe('42583-a-bridge-truck', () => {
    it('test 1', () => {
        const birdge_length = 2;
        const weight = 10;
        const truck_weights = [7, 4, 5, 6];
        const result = 8;
        expect(solution(birdge_length, weight, truck_weights)).toEqual(result);
    });
    it('test 2', () => {
        const birdge_length = 100;
        const weight = 100;
        const truck_weights = [10];
        const result = 101;
        expect(solution(birdge_length, weight, truck_weights)).toEqual(result);
    });
    it('test 3', () => {
        const birdge_length = 100;
        const weight = 100;
        const truck_weights = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
        const result = 110;
        expect(solution(birdge_length, weight, truck_weights)).toEqual(result);
    });
});
