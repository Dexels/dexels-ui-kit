import { DropdownMultiSelectOption } from '../../components/organisms/DropdownMultiSelect/types';
import { DropdownOption } from '../../components/molecules/Dropdown/Dropdown';
import { DropdownSelectOption } from '../../components/organisms/DropdownSelect/DropdownSelect';

export interface Option {
    [key: string]: unknown;
}

export const areAllOptionsSelected = <U, T extends U[]>(data: T, propertyName: keyof U): boolean =>
    data.every((option) => option[propertyName]);

export const getDropdownSelectOption = <T extends DropdownSelectOption>(data: Array<T>, value: string): T | undefined =>
    data ? data.find((item) => item.value === value) : undefined;

export const getOptionLabel = <T extends DropdownSelectOption>(data: Array<T>, value: string): string => {
    const findOption = data.find((item) => item.value === value);

    return findOption ? `${findOption.label}` : '';
};

export const getSelectedElements = <U, T extends U>(data: Array<T>, propertyName: keyof U): Array<T> =>
    data.filter((option) => option[propertyName]);

export const getSelectedText = <U, T extends U>(
    selectedOptions: Array<T>,
    propertyNameDescription: keyof U,
    delimiter = ','
): string => {
    let text = '';

    selectedOptions.forEach((selectedOption) => {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        text += `${text ? `${delimiter} ` : ''}${selectedOption[propertyNameDescription]}`;
    });

    return text;
};

export const isAnyOptionSelected = <U, T extends U>(data: Array<T>, propertyName: keyof U): boolean =>
    data.some((option) => option[propertyName]);

// The unsetOtherValues param is meant to possibly set all other entries to false
export const setElementSelected = <U, T extends U>(
    data: T[],
    selectedElement: T,
    propertyIdName: keyof U,
    propertySelectedName: keyof U,
    unsetOtherValues?: boolean
): Array<T> => {
    const output: Array<T> = [];

    data.forEach((element) => {
        let isSelected = element[propertySelectedName] as unknown as boolean;

        if (unsetOtherValues) {
            isSelected = element[propertyIdName] === selectedElement[propertyIdName];
        } else if (element[propertyIdName] === selectedElement[propertyIdName]) {
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

const setAllElements = <U, T extends U>(data: Array<T>, isSelected: boolean, propertySelectedName: keyof U): T[] => {
    const output: T[] = [];

    data.forEach((element) => {
        const newElement = {
            ...element,
            [propertySelectedName]: isSelected,
        };

        output.push(newElement);
    });

    return output;
};

export const setAllElementsSelected = <U, T extends U>(data: Array<T>, propertySelectedName: keyof U): Array<T> =>
    setAllElements(data, true, propertySelectedName);

export const setAllElementsDeselected = <U, T extends U>(data: Array<T>, propertySelectedName: keyof U): Array<T> =>
    setAllElements(data, false, propertySelectedName);

export const selectOptionsFacade = <U, T extends U>(
    data: Array<T>,
    labelPropertyName: keyof U,
    valuePropertyName: keyof U
): DropdownOption[] =>
    data.map((option) => ({
        label: option[labelPropertyName] as unknown as string,
        value: option[valuePropertyName] as unknown as string | number,
    }));

export const selectOptionsExtend = <T, U extends T & DropdownMultiSelectOption>(
    data: Array<T>,
    labelPropertyName: keyof T,
    valuePropertyName: keyof T,
    selectedPropertyName: keyof T
): Array<U> =>
    data.map(
        (option) =>
            ({
                ...option,
                isSelected: option[selectedPropertyName] as unknown as boolean,
                label: option[labelPropertyName] as unknown as string,
                value: option[valuePropertyName] as unknown as string | number,
            } as U)
    );

export const removeElement = <U, T extends U>(data: T[], propertyName: keyof U, propertyValue: unknown): Array<T> =>
    data.filter((option) => option[propertyName] !== propertyValue);
