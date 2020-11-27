import { Data, EditableInputDataProps } from '../types';
import { DropdownOption } from '../../../molecules/Dropdown';

export const editableInformationData = <T extends DropdownOption>(): Data<T> => {
    const result: Data<T> = [];

    result.push({
        component: 'Input',
        isDisabled: false,
        isEditable: true,
        isRequired: true,
        label: 'Color',
        maxLength: 20,
        name: 'Color',
        value: 'Orange',
    } as EditableInputDataProps);

    result.push({
        component: 'Input',
        isDisabled: false,
        isEditable: true,
        isRequired: true,
        label: 'Number',
        min: 0,
        name: 'Number',
        value: '0',
    } as EditableInputDataProps);

    return result;
};

export default editableInformationData;
