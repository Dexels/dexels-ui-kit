export default function validateInputLength(input, minChars, maxChars, propName, componentName) {
    const propValue = input;

    const errorText = 'Invalid prop '.concat(propName)
        .concat(' passed to ')
        .concat(componentName)
        .concat('. Expected a value between')
        .concat(minChars)
        .concat(' and ')
        .concat(maxChars)
        .concat(' characters.');

    if (propValue.length < minChars || propValue.length > maxChars) {
        return new Error(errorText.concat(' Got '.concat(propValue.length)));
    }

    return null;
}
