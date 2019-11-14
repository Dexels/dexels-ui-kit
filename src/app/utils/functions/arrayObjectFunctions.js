const DEFAULT_PROPERTYNAME_ID = 'Id';
const DEFAULT_PROPERTYNAME_DESCRIPTION = 'Description';
const DEFAULT_PROPERTYNAME_SELECTED = 'Selected';

export const areAllOptionsSelected = (data, propertyName = DEFAULT_PROPERTYNAME_SELECTED) => (
    data.every((element) => element[propertyName])
);

export const getSelectedElements = (data, propertyName = DEFAULT_PROPERTYNAME_SELECTED) => (
    data.filter((element) => element[propertyName])
);

export const getSelectedText = (
    selectedOptions,
    propertyNameDescription = DEFAULT_PROPERTYNAME_DESCRIPTION,
    delimiter = ',',
) => {
    let text = '';

    selectedOptions.forEach((selectedOption) => {
        text += `${text ? `${delimiter} ` : ''}${selectedOption[propertyNameDescription]}`;
    });

    return text;
};

export const isAnyOptionSelected = (data, propertyName = DEFAULT_PROPERTYNAME_SELECTED) => (
    data.some((element) => element[propertyName])
);

// Assuming every element has Id and Selected properties (or overwrite them ofcourse)
// The unsetOtherValues param is meant to possibly set all other entries to false
export const setElementSelected = (
    data,
    selectedProperty,
    propertyIdName = DEFAULT_PROPERTYNAME_ID,
    propertySelectedName = DEFAULT_PROPERTYNAME_SELECTED,
    unsetOtherValues = false,
) => {
    const output = [];
    let newElement = null;

    data.forEach((element) => {
        newElement = element;

        if (unsetOtherValues) {
            if (element[propertyIdName] === selectedProperty[propertyIdName]) {
                newElement[propertySelectedName] = true;
            } else {
                newElement[propertySelectedName] = false;
            }
        }

        if (!unsetOtherValues && element[propertyIdName] === selectedProperty[propertyIdName]) {
            newElement[propertySelectedName] = !element[propertySelectedName];
        }

        output.push(newElement);
    });

    return output;
};

const setAllElements = (data, selected, propertySelectedName) => {
    const output = [];

    data.forEach((element) => {
        const newElement = element;
        newElement[propertySelectedName] = selected;
        output.push(newElement);
    });

    return output;
};

export const setAllElementsSelected = (data, propertySelectedName = DEFAULT_PROPERTYNAME_SELECTED) => (
    setAllElements(data, true, propertySelectedName)
);

export const setAllElementsDeselected = (data, propertySelectedName = DEFAULT_PROPERTYNAME_SELECTED) => (
    setAllElements(data, false, propertySelectedName)
);
