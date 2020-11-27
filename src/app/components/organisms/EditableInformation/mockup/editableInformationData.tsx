import {
    CheckboxDataProps,
    Data,
    DatePickerDataProps,
    EditableDatePickerDataProps,
    EditableDropdownDataProps,
    EditableDropdownSelectDataProps,
    EditableInputDataProps,
    EditableInputNumberDataProps,
    EditableTimePickerDataProps,
    TimePickerDataProps,
} from '../types';
import { IconCustomizable, IconCustomizableSize } from '../../../molecules/IconCustomizable';
import React, { ReactNode } from 'react';
import { DropdownSelectOption } from '../../DropdownSelect/DropdownSelect';
import { IconType } from '../../../../types';
import moment from 'moment';
import { selectOptionsFacade } from '../../../../utils/functions/arrayObjectFunctions';

interface Fruit {
    Adornment: ReactNode;
    Id: number;
    IsSelected: boolean;
    Name: string;
}

const fruits: Fruit[] = [
    {
        Adornment: <IconCustomizable iconSize={IconCustomizableSize.SIZE24} iconType={IconType.CLUBPLACEHOLDER10} />,
        Id: 1,
        IsSelected: true,
        Name: 'Banana',
    },
    {
        Adornment: <IconCustomizable iconSize={IconCustomizableSize.SIZE24} iconType={IconType.CLUBPLACEHOLDER09} />,
        Id: 2,
        IsSelected: false,
        Name: 'Apple',
    },
    {
        Adornment: <IconCustomizable iconSize={IconCustomizableSize.SIZE24} iconType={IconType.CLUBPLACEHOLDER10} />,
        Id: 3,
        IsSelected: false,
        Name: 'Pear',
    },
    {
        Adornment: <IconCustomizable iconSize={IconCustomizableSize.SIZE24} iconType={IconType.CLUBPLACEHOLDER12} />,
        Id: 4,
        IsSelected: false,
        Name: 'Mango',
    },
];

export const editableInformationData = <T extends DropdownSelectOption>(): Data<T> => {
    const result: Data<T> = [];

    result.push({
        component: 'DatePicker',
        isEditable: false,
        label: 'Date 1',
        name: 'a-date-name',
        value: moment(),
    } as DatePickerDataProps);

    result.push({
        component: 'TimePicker',
        isEditable: false,
        label: 'Time 2',
        name: 'a-time-name',
        value: ['10', '00'],
    } as TimePickerDataProps);

    result.push({
        component: 'Checkbox',
        isEditable: false,
        label: 'Checkbox 1',
        name: 'a-checkbox-name',
        textValue: 'Yes',
        value: true,
    } as CheckboxDataProps);

    result.push({
        component: 'InputNumber',
        isDisabled: false,
        isEditable: false,
        isRequired: true,
        label: 'Number',
        min: 0,
        name: 'a-nubmer-name',
        value: 0,
    } as EditableInputNumberDataProps);

    result.push({
        component: 'Input',
        isDisabled: false,
        isEditable: false,
        isRequired: true,
        label: 'Input (not editable)',
        maxLength: 20,
        name: 'a-input-name',
        value: 'Apple',
    } as EditableInputDataProps);

    result.push({
        component: 'Dropdown',
        isDisabled: false,
        isEditable: true,
        isRequired: true,
        label: 'Dropdown',
        name: 'a-dropdown-name',
        options: selectOptionsFacade(fruits, 'Name', 'Id'),
        textValue: 'Banana',
        value: '1',
    } as EditableDropdownDataProps);

    result.push({
        component: 'DatePicker',
        isEditable: true,
        label: 'Date 2',
        name: 'a-date2-name',
        value: moment(),
    } as EditableDatePickerDataProps);

    result.push({
        component: 'TimePicker',
        isEditable: true,
        label: 'Time 2',
        name: 'a-time2-name',
        value: ['12', '00'],
    } as EditableTimePickerDataProps);

    result.push({
        component: 'Checkbox',
        isEditable: true,
        label: 'Checkbox 2',
        name: 'a-checkbox2-name',
        textValue: 'Yes',
        value: true,
    } as CheckboxDataProps);

    result.push({
        component: 'InputNumber',
        isDisabled: false,
        isEditable: true,
        isRequired: true,
        label: 'Number Max 10',
        max: 10,
        min: 0,
        name: 'a-nubmer2-name',
        value: 0,
    } as EditableInputNumberDataProps);

    result.push({
        component: 'Input',
        isDisabled: false,
        isEditable: true,
        isRequired: true,
        label: 'Input',
        maxLength: 20,
        name: 'a-input2-name',
        value: 'Orange',
    } as EditableInputDataProps);

    result.push({
        component: 'DropdownSelect',
        footerText: 'Select',
        iconType: IconType.CLUBPLACEHOLDER1,
        isDisabled: false,
        isEditable: true,
        isRequired: true,
        label: 'DropdownSelect',
        name: 'a-dropdown-select-name',
        nameId: 'dropdown-select-publicId',
        noResultsMessage: 'no results',
        optionLabel: "Use '{{option}}' as chosen {{type}}",
        options: selectOptionsFacade(fruits, 'Name', 'Id'),
        type: 'fruit',
        value: 'Banana',
        valueId: '1',
    } as EditableDropdownSelectDataProps<T>);

    return result;
};

export default editableInformationData;
