import React from 'react';
import { StyledTextIcon } from './TextIcon.sc';
import validateInputLength from '../../../utils/validators';

function customValidateInputLength({ text }, propName, componentName) {
    return validateInputLength(text, 1, 2, propName, componentName);
}

const TextIcon = ({ text }) => (
    <StyledTextIcon>
        {text}
    </StyledTextIcon>
);

TextIcon.propTypes = {
    text: customValidateInputLength,
};

TextIcon.defaultProps = {
    text: 'A',
};

export default TextIcon;
