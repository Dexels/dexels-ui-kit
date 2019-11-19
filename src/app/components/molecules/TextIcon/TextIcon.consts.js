export const textPropTypeFactory = (isRequired) => (
    ({ text }, propName, componentName) => {
        const baseErrorText = `Invalid prop ${propName} passed to ${componentName}`;

        if (!text && isRequired) {
            return new Error(`The prop '${propName}' is marked as required in '${componentName}'.`);
        }

        if (typeof text !== 'string') {
            return new Error(`${baseErrorText}. The prop '${propName}' should be typeof 'string' but got ${typeof text.length} instead.`);
        }

        if (text.length !== 1) {
            return new Error(`${baseErrorText}. The prop '${propName}' should be 1 character but got ${text.length} characters instead.`);
        }

        return null;
    }
);

export default textPropTypeFactory;
