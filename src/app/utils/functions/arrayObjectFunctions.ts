/* eslint-disable @typescript-eslint/restrict-template-expressions */
const DEFAULT_PROPERTYNAME_ID = 'Id';
const DEFAULT_PROPERTYNAME_DESCRIPTION = 'Description';
const DEFAULT_PROPERTYNAME_SELECTED = 'Selected';

type Option = { [key: string]: unknown };

export const areAllOptionsSelected = (data: Option[], propertyName = DEFAULT_PROPERTYNAME_SELECTED): boolean =>
    data.every((element) => element[propertyName]);

export const getSelectedElements = (data: Option[], propertyName = DEFAULT_PROPERTYNAME_SELECTED): Option[] =>
    data.filter((element) => element[propertyName]);

export const getSelectedText = (
    selectedOptions: Option[],
    propertyNameDescription = DEFAULT_PROPERTYNAME_DESCRIPTION,
    delimiter = ','
): string => {
    let text = '';

    selectedOptions.forEach((selectedOption) => {
        text += `${text ? `${delimiter} ` : ''}${selectedOption[propertyNameDescription]}`;
    });

    return text;
};

export const isAnyOptionSelected = (data: Option[], propertyName = DEFAULT_PROPERTYNAME_SELECTED): boolean =>
    data.some((element) => element[propertyName]);

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

const setAllElements = (data: Option[], selected: boolean, propertySelectedName: string): Option[] => {
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
    data: Option[],
    propertySelectedName = DEFAULT_PROPERTYNAME_SELECTED
): ReturnType<typeof setAllElements> => setAllElements(data, true, propertySelectedName);

export const setAllElementsDeselected = (
    data: Option[],
    propertySelectedName = DEFAULT_PROPERTYNAME_SELECTED
): ReturnType<typeof setAllElements> => setAllElements(data, false, propertySelectedName);

export const selectOptionsFacade = (
    data: Option[],
    valuePropertyName = DEFAULT_PROPERTYNAME_ID,
    textPropertyName = DEFAULT_PROPERTYNAME_DESCRIPTION
): Array<{ label: string; value: unknown }> =>
    data.map((option) => ({
        label: option[textPropertyName] as string,
        value: option[valuePropertyName] as string | number,
    }));
