import { getDropdownSelectOption, selectOptionsFacade } from '../../../utils/functions/arrayObjectFunctions';
import { dropdownSelectOptions } from '../../../components/organisms/DropdownSelect/mockup/data';
import { fruitOptions } from '../../../components/molecules/Dropdown/mockup/data';

describe('test arrayObject functions', () => {
    test('test getDropdownSelectOption', () => {
        expect(getDropdownSelectOption(dropdownSelectOptions, 'APPLES')).toBeUndefined();
        expect(getDropdownSelectOption(dropdownSelectOptions, 'APPLE')).toBeDefined();
        expect(getDropdownSelectOption(dropdownSelectOptions, 'ORANGE')?.label).toEqual('Orange');
    });

    test('test selectOptionsFacade', () => {
        expect(selectOptionsFacade(fruitOptions, 'Name', 'Id')).toBeDefined();
        expect(selectOptionsFacade(fruitOptions, 'Name', 'Id')).toHaveLength(4);
    });
});
