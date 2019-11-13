const DEFAULT_PROPERTYNAME_ID = 'Id';
const DEFAULT_PROPERTYNAME_DESCRIPTION = 'Description';
const DEFAULT_PROPERTYNAME_SELECTED = 'Selected';

export const cloneArray = (data) => {
    const result = [];

    data.forEach((dataInstance) => {
        result.push({
            ...dataInstance,
        });
    });

    return result;
};

export const areAllOptionsSelected = (data, propertyName = DEFAULT_PROPERTYNAME_SELECTED) => {
    for (let i = 0; i < data.length; i += 1) {
        const elem = data[i];

        if (!elem[propertyName]) {
            return false;
        }
    }

    return true;
};

export const getSelectedElement = (data, propertyName = DEFAULT_PROPERTYNAME_SELECTED) => {
    if (data && data.length !== 0) {
        for (let i = 0; i < data.length; i += 1) {
            const elem = data[i];

            if (elem[propertyName] && Boolean(elem[propertyName])) {
                return elem;
            }
        }
    }

    return null;
};

export const getSelectedElements = (data, propertyName = DEFAULT_PROPERTYNAME_SELECTED) => {
    const elements = [];

    if (data && data.length !== 0) {
        for (let i = 0; i < data.length; i += 1) {
            const elem = data[i];

            if (elem[propertyName] && Boolean(elem[propertyName])) {
                elements.push(elem);
            }
        }
    }

    return elements;
};

export const getSelectedTexts = (
    data,
    propertyName = DEFAULT_PROPERTYNAME_SELECTED,
    propertyNameDescription = DEFAULT_PROPERTYNAME_DESCRIPTION,
    delimiter = ',',
) => {
    let texts = '';

    if (data && data.length !== 0) {
        for (let i = 0; i < data.length; i += 1) {
            const elem = data[i];

            if (elem[propertyName] && Boolean(elem[propertyName])) {
                texts += texts !== '' ? `${delimiter} ` : ' ';
                texts += elem[propertyNameDescription];
            }
        }
    }

    return texts;
};

export const isAnyOptionSelected = (data, propertyName = DEFAULT_PROPERTYNAME_SELECTED) => {
    for (let i = 0; i < data.length; i += 1) {
        if (data[i][propertyName]) {
            return true;
        }
    }

    return false;
};

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
    let elem = null;

    if (data && data.length !== 0) {
        for (let i = 0; i < data.length; i += 1) {
            elem = data[i];

            if (unsetOtherValues) {
                if (elem[propertyIdName] === selectedProperty[propertyIdName]) {
                    elem[propertySelectedName] = true;
                } else {
                    elem[propertySelectedName] = false;
                }
            }

            if (!unsetOtherValues && elem[propertyIdName] === selectedProperty[propertyIdName]) {
                elem[propertySelectedName] = !elem[propertySelectedName];
            }

            output.push(elem);
        }
    }

    return output;
};

const setAllElements = (data, selected, propertySelectedName) => {
    const output = [];

    if (data && data.length !== 0) {
        for (let i = 0; i < data.length; i += 1) {
            const elem = data[i];
            elem[propertySelectedName] = selected;
            output.push(elem);
        }
    }

    return output;
};

export const setAllElementsSelected = (data, propertySelectedName = DEFAULT_PROPERTYNAME_SELECTED) => (
    setAllElements(data, true, propertySelectedName)
);

export const setAllElementsDeselected = (data, propertySelectedName = DEFAULT_PROPERTYNAME_SELECTED) => (
    setAllElements(data, false, propertySelectedName)
);
