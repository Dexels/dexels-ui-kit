import { areEqualObjects, getObjectDifference } from '../../../utils/functions/objectFunctions';

export interface Fruit {
    extraProp?: string;
    id: number;
    isSelected: boolean;
    name: string;
}

describe('test functions areEqualObjects and getObjectDifference', () => {
    test('test on 2 objects of the same interface', () => {
        const object1: Fruit = {
            extraProp: 'new',
            id: 1,
            isSelected: true,
            name: 'Apple',
        };

        const object2: Fruit = {
            id: 2,
            isSelected: true,
            name: 'Apple',
        };

        expect(areEqualObjects(object1, object2)).toBe(false);
        expect(areEqualObjects(object1, object2, ['id', 'extraProp'])).toBe(true);
        expect(getObjectDifference(object1, object2)).toContain('id');
        expect(getObjectDifference(object1, object2)).toContain('extraProp');
    });

    test('test on 2 objects of different interfaces', () => {
        const object1: Fruit = {
            id: 1,
            isSelected: true,
            name: 'Apple',
        };

        const object2 = {
            id: 1,
            isSelected: false,
            name: 'Apple',
        };

        expect(areEqualObjects(object1, object2)).toBe(false);
        expect(areEqualObjects(object1, object2, ['isSelected'])).toBe(true);
        expect(getObjectDifference(object1, object2)).toContain('isSelected');
    });
});
