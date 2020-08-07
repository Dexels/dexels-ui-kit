/* eslint-disable @typescript-eslint/ban-types */
import { DropdownMultiSelectOption } from '../../components/organisms/DropdownMultiSelect/types';
import { DropdownOption } from '../../components/molecules/Dropdown/Dropdown';

const DEFAULT_PROPERTYNAME_ID = 'Id';
const DEFAULT_PROPERTYNAME_DESCRIPTION = 'Description';
const DEFAULT_PROPERTYNAME_SELECTED = 'IsSelected';

export interface Option {
    [key: string]: unknown;
}

export const areAllOptionsSelected = <T extends object>(
    data: Array<T>,
    propertyName = DEFAULT_PROPERTYNAME_SELECTED as keyof T
): boolean => data.every((option) => option[propertyName]);

export const getSelectedElements = <T extends object>(
    data: Array<T>,
    propertyName = DEFAULT_PROPERTYNAME_SELECTED as keyof T
): Array<T> => data.filter((option) => option[propertyName]);

export const getSelectedText = <T extends object>(
    selectedOptions: Array<T>,
    propertyNameDescription = DEFAULT_PROPERTYNAME_DESCRIPTION,
    delimiter = ','
): string => {
    let text = '';

    selectedOptions.forEach((selectedOption) => {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        text += `${text ? `${delimiter} ` : ''}${selectedOption[propertyNameDescription as keyof T]}`;
    });

    return text;
};

export const isAnyOptionSelected = <T extends object>(
    data: Array<T>,
    propertyName = DEFAULT_PROPERTYNAME_SELECTED as keyof T
): boolean => data.some((option) => option[propertyName]);

// Assuming every element has Id and Selected properties (or overwrite them ofcourse)
// The unsetOtherValues param is meant to possibly set all other entries to false
export const setElementSelected = <T extends { [key: string]: unknown }>({
    data,
    selectedProperty,
    propertyIdName = DEFAULT_PROPERTYNAME_ID,
    propertySelectedName = DEFAULT_PROPERTYNAME_SELECTED,
    unsetOtherValues = false,
}: {
    data: T[];
    propertyIdName: keyof T;
    propertySelectedName: keyof T;
    selectedProperty: T;
    unsetOtherValues: boolean;
}): Array<T> => {
    const output: Array<T> = [];

    data.forEach((element) => {
        let isSelected = false;

        if (unsetOtherValues) {
            isSelected = element[propertyIdName] === (selectedProperty[propertyIdName] as boolean);
        } else if (element[propertyIdName] === selectedProperty[propertyIdName]) {
            isSelected = !element[propertySelectedName];
        }

        const newElement = {
            ...element,
            [propertySelectedName]: isSelected,
        };

        output.push(newElement);
    });

    return output;
};

const setAllElements = <T extends object>(data: Array<T>, selected: boolean, propertySelectedName: string): T[] => {
    const output: T[] = [];

    data.forEach((element) => {
        const newElement = {
            ...element,
            [propertySelectedName]: selected,
        };

        output.push(newElement);
    });

    return output;
};

export const setAllElementsSelected = <T extends object>(
    data: Array<T>,
    propertySelectedName = DEFAULT_PROPERTYNAME_SELECTED
): ReturnType<typeof setAllElements> => setAllElements(data, true, propertySelectedName);

export const setAllElementsDeselected = <T extends object>(
    data: Array<T>,
    propertySelectedName = DEFAULT_PROPERTYNAME_SELECTED
): ReturnType<typeof setAllElements> => setAllElements(data, false, propertySelectedName);

export const selectOptionsFacade = <T extends object>(
    data: Array<T>,
    labelPropertyName: keyof T,
    valuePropertyName: keyof T
): DropdownOption[] => {
    return data.map((option) => {
        return {
            label: (option[labelPropertyName] as unknown) as string,
            value: (option[valuePropertyName] as unknown) as string | number,
        };
    });
};

export const selectOptionsExtend = <T, U extends T & DropdownMultiSelectOption>(
    data: Array<T>,
    labelPropertyName: keyof T,
    valuePropertyName: keyof T,
    selectedPropertyName: keyof T
): Array<U> => {
    return data.map((option) => {
        return {
            ...option,
            isSelected: (option[selectedPropertyName] as unknown) as boolean,
            label: (option[labelPropertyName] as unknown) as string,
            value: (option[valuePropertyName] as unknown) as string | number,
        } as U;
    });
};
