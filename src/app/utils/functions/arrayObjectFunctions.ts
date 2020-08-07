/* eslint-disable @typescript-eslint/ban-types */
import { DropdownOption } from '../../components/molecules/Dropdown/Dropdown';

const DEFAULT_PROPERTYNAME_ID = 'Id';
const DEFAULT_PROPERTYNAME_DESCRIPTION = 'Description';
const DEFAULT_PROPERTYNAME_SELECTED = 'isSelected';

export interface Option {
    [key: string]: unknown;
}

export const areAllOptionsSelected = (data: Array<Object>, propertyName = DEFAULT_PROPERTYNAME_SELECTED): boolean =>
    data.every((option) => (option as Option)[propertyName]);

export const getSelectedElements = (data: Array<Object>, propertyName = DEFAULT_PROPERTYNAME_SELECTED): Array<Object> =>
    data.filter((option) => (option as Option)[propertyName]);

export const getSelectedText = (
    selectedOptions: Array<Object>,
    propertyNameDescription = DEFAULT_PROPERTYNAME_DESCRIPTION,
    delimiter = ','
): string => {
    let text = '';

    selectedOptions.forEach((selectedOption) => {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        text += `${text ? `${delimiter} ` : ''}${(selectedOption as Option)[propertyNameDescription]}`;
    });

    return text;
};

export const isAnyOptionSelected = (data: Array<Object>, propertyName = DEFAULT_PROPERTYNAME_SELECTED): boolean =>
    data.some((option) => (option as Option)[propertyName]);

// Assuming every element has Id and Selected properties (or overwrite them ofcourse)
// The unsetOtherValues param is meant to possibly set all other entries to false
export const setElementSelected = (
    data: Option[],
    selectedProperty: Option,
    propertyIdName = DEFAULT_PROPERTYNAME_ID,
    propertySelectedName = DEFAULT_PROPERTYNAME_SELECTED,
    unsetOtherValues = false
): Option[] => {
    const output: Option[] = [];

    data.forEach((element) => {
        const newElement = {
            ...element,
        };

        if (unsetOtherValues) {
            newElement[propertySelectedName] = element[propertyIdName] === selectedProperty[propertyIdName];
        } else if (element[propertyIdName] === selectedProperty[propertyIdName]) {
            newElement[propertySelectedName] = !element[propertySelectedName];
        }

        output.push(newElement);
    });

    return output;
};

const setAllElements = (data: Array<Object>, selected: boolean, propertySelectedName: string): Option[] => {
    const output: Option[] = [];

    data.forEach((element) => {
        const newElement = {
            ...element,
            [propertySelectedName]: selected,
        };

        output.push(newElement);
    });

    return output;
};

export const setAllElementsSelected = (
    data: Array<Object>,
    propertySelectedName = DEFAULT_PROPERTYNAME_SELECTED
): ReturnType<typeof setAllElements> => setAllElements(data, true, propertySelectedName);

export const setAllElementsDeselected = (
    data: Array<Object>,
    propertySelectedName = DEFAULT_PROPERTYNAME_SELECTED
): ReturnType<typeof setAllElements> => setAllElements(data, false, propertySelectedName);

export const selectOptionsFacade = (
    data: Array<Object>,
    labelPropertyName = DEFAULT_PROPERTYNAME_ID,
    valuePropertyName = DEFAULT_PROPERTYNAME_DESCRIPTION
): DropdownOption[] => {
    return data.map((option) => {
        return {
            label: (option as Option)[labelPropertyName] as string,
            value: (option as Option)[valuePropertyName] as string | number,
        };
    });
};
