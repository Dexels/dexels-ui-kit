const validateInputLength = (input, minChars, maxChars, propName, componentName) => {
    const errorText = `Invalid prop ${propName} passed to ${componentName}. Expected a value between ${minChars} and ${maxChars} characters.`;

    if (input.length < minChars || input.length > maxChars) {
        return new Error(`${errorText} Got ${input.length} characters instead.`);
    }

    return null;
};

export default validateInputLength;
