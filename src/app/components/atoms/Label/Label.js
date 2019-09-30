import PropTypes from 'prop-types';
import React from 'react';
import { StyledLabel } from './Label.sc';

const Label = ({
    children,
    hasError,
    isActive,
    isHovered,
    isDisabled,
    isFocussed,
    isSmall,
    isValid,
}) => (
    <StyledLabel
        hasError={hasError}
        isActive={isActive}
        isDisabled={isDisabled}
        isFocussed={isFocussed}
        isHovered={isHovered}
        isSmall={isSmall}
        isValid={isValid}
    >
        {children}
    </StyledLabel>
);

Label.propTypes = {
    children: PropTypes.node.isRequired,
    hasError: PropTypes.bool,
    isActive: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isFocussed: PropTypes.bool,
    isHovered: PropTypes.bool,
    isSmall: PropTypes.bool,
    isValid: PropTypes.bool,
};

Label.defaultProps = {
    hasError: false,
    isActive: false,
    isDisabled: false,
    isFocussed: false,
    isHovered: false,
    isSmall: false,
    isValid: false,
};

export default Label;
