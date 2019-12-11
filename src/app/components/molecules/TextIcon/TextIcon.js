import { TEXT_ICON_SIZES, textPropTypeFactory } from './TextIcon.consts';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledTextIcon } from './TextIcon.sc';

const TextIcon = ({
    className,
    size,
    text,
    ...rest
}) => (
    <StyledTextIcon className={className} size={size} {...rest}>
        {text}
    </StyledTextIcon>
);

const textPropType = textPropTypeFactory(false);
textPropType.isRequired = textPropTypeFactory(true);

TextIcon.sizes = TEXT_ICON_SIZES;

TextIcon.propTypes = {
    className: PropTypes.string,
    size: PropTypes.oneOf(Object.values(TextIcon.sizes)),
    text: textPropType.isRequired,
};

TextIcon.defaultProps = {
    className: '',
    size: TextIcon.sizes.LARGE,
};

export default TextIcon;
