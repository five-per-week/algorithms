const solution = require('./younho9');

describe('1번', () => {
    it('test 1', () => {
        const clothes = [
            ['yellow_hat', 'headgear'],
            ['blue_sunglasses', 'eyewear'],
            ['green_turban', 'headgear'],
        ];
        const result = 5;
        expect(solution(clothes)).toEqual(result);
    });
    it('test 2', () => {
        const clothes = [
            ['crow_mask', 'face'],
            ['blue_sunglasses', 'face'],
            ['smoky_makeup', 'face'],
        ];
        const result = 3;
        expect(solution(clothes)).toEqual(result);
    });
});
