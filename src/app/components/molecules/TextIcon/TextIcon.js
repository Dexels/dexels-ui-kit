import React from 'react';
import { StyledTextIcon } from './TextIcon.sc';
import { textPropTypeFactory } from './TextIcon.consts';

const TextIcon = ({ text, ...rest }) => (
    <StyledTextIcon {...rest}>
        {text}
    </StyledTextIcon>
);

const textPropType = textPropTypeFactory(false);
textPropType.isRequired = textPropTypeFactory(true);

TextIcon.propTypes = {
    text: textPropType.isRequired,
};

export default TextIcon;
