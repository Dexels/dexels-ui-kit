import React from 'react';
import { StyledTextIcon } from './TextIcon.sc';
import validateInputLength from '../../../utils/validators/validateInputLength';

const TextIcon = ({ text }) => (
    <StyledTextIcon>
        {text}
    </StyledTextIcon>
);

TextIcon.propTypes = {
    text: ({ text }, propName, componentName) => (
        validateInputLength(text, 1, 2, propName, componentName)
    ),
};

TextIcon.defaultProps = {
    text: '',
};

export default TextIcon;
