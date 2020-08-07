import { DropdownOption } from '../../molecules/Dropdown/Dropdown';

export enum DropdownOptionAllTexts {
    INDETERMINATE = 'indeterminate',
    OFF = 'off',
    ON = 'on',
}

export interface DropdownMultiSelectOption extends DropdownOption {
    isSelected: boolean;
}
