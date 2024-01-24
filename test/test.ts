import merge from "../src/mergeArray";

describe('mergeArrays', () => {
    it('Merge 2 array เข้าด้วยกัน', () => {
        const result = merge([1, 3, 9], [2, 4, 6]);
        expect(result).toEqual([1, 2, 3, 4, 6, 9]);
    });

    it('Merge 2 array ที่มีขนาดต่างกันเข้าด้วยกัน', () => {
        const result = merge([1, 3, 5, 7], [2, 4, 6]);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });

    it('Merge 2 array array ที่ว่างกับ array ที่มีค่าเข้าด้วยกัน', () => {
        const result = merge([], [1, 2, 3]);
        expect(result).toEqual([1, 2, 3]);
    });
});