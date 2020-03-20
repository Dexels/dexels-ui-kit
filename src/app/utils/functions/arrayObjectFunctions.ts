const DEFAULT_PROPERTYNAME_ID = 'Id';
const DEFAULT_PROPERTYNAME_DESCRIPTION = 'Description';
const DEFAULT_PROPERTYNAME_SELECTED = 'Selected';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Option = { [key: string]: any };
type Options = Option[];

export const areAllOptionsSelected = (data: Options, propertyName = DEFAULT_PROPERTYNAME_SELECTED): boolean => (
    data.every((element) => element[propertyName])
);

export const getSelectedElements = (data: Options, propertyName = DEFAULT_PROPERTYNAME_SELECTED): Options => (
    data.filter((element) => element[propertyName])
);

export const getSelectedText = (
    selectedOptions: Options,
    propertyNameDescription = DEFAULT_PROPERTYNAME_DESCRIPTION,
    delimiter = ',',
): string => {
    let text = '';

    selectedOptions.forEach((selectedOption) => {
        text += `${text ? `${delimiter} ` : ''}${selectedOption[propertyNameDescription]}`;
    });

    return text;
};

export const isAnyOptionSelected = (data: Options, propertyName = DEFAULT_PROPERTYNAME_SELECTED): boolean => (
    data.some((element) => element[propertyName])
);

// Assuming every element has Id and Selected properties (or overwrite them ofcourse)
// The unsetOtherValues param is meant to possibly set all other entries to false
export const setElementSelected = (
    data: Options,
    selectedProperty: Option,
    propertyIdName = DEFAULT_PROPERTYNAME_ID,
    propertySelectedName = DEFAULT_PROPERTYNAME_SELECTED,
    unsetOtherValues = false,
): Options => {
    const output: Options = [];

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

const setAllElements = (data: Options, selected: boolean, propertySelectedName: string): Options => {
    const output: Options = [];

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
    data: Options,
    propertySelectedName = DEFAULT_PROPERTYNAME_SELECTED,
): ReturnType<typeof setAllElements> => (
    setAllElements(data, true, propertySelectedName)
);

export const setAllElementsDeselected = (
    data: Options,
    propertySelectedName = DEFAULT_PROPERTYNAME_SELECTED,
): ReturnType<typeof setAllElements> => (
    setAllElements(data, false, propertySelectedName)
);
