import PropTypes from 'prop-types';
import React from 'react';
import { StyledLabel } from './Label.sc';

const Label = ({
    children,
    hasError,
    isActive,
    isCheckboxLabel,
    isDisabled,
    isFocused,
    isSmall,
    isTruncatable,
    isValid,
}) => (
    <StyledLabel
        hasError={hasError}
        isActive={isActive}
        isCheckboxLabel={isCheckboxLabel}
        isDisabled={isDisabled}
        isFocused={isFocused}
        isSmall={isSmall}
        isTruncatable={isTruncatable}
        isValid={isValid}
    >
        {children}
    </StyledLabel>
);

Label.propTypes = {
    children: PropTypes.node.isRequired,
    hasError: PropTypes.bool,
    isActive: PropTypes.bool,
    isCheckboxLabel: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isFocused: PropTypes.bool,
    isSmall: PropTypes.bool,
    isTruncatable: PropTypes.bool,
    isValid: PropTypes.bool,
};

Label.defaultProps = {
    hasError: false,
    isActive: false,
    isCheckboxLabel: false,
    isDisabled: false,
    isFocused: false,
    isSmall: false,
    isTruncatable: false,
    isValid: false,
};

export default Label;
