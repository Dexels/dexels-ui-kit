import { TEXT_ICON_SIZES, textPropTypeFactory } from './TextIcon.consts';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledTextIcon } from './TextIcon.sc';

const TextIcon = ({ size, text, ...rest }) => (
    <StyledTextIcon size={size} {...rest}>
        {text}
    </StyledTextIcon>
);

const textPropType = textPropTypeFactory(false);
textPropType.isRequired = textPropTypeFactory(true);

TextIcon.sizes = TEXT_ICON_SIZES;

TextIcon.propTypes = {
    size: PropTypes.oneOf(Object.values(TextIcon.sizes)),
    text: textPropType.isRequired,
};

TextIcon.defaultProps = {
    size: TextIcon.sizes.LARGE,
};

export default TextIcon;
