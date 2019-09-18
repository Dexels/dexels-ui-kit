import { BUTTON_SIZES, BUTTON_VARIANTS } from './Button.consts';
import { StyledButton, Text } from './Button.sc';
import PropTypes from 'prop-types';
import React from 'react';

const Button = ({
    children,
    isDisabled,
    onClick,
    size,
    variant,
}) => (
    <StyledButton
        isDisabled={isDisabled}
        onClick={onClick}
        size={size}
        variant={variant}
    >
        <Text>
            {children}
        </Text>
    </StyledButton>
);

Button.sizes = BUTTON_SIZES;
Button.variants = BUTTON_VARIANTS;

Button.propTypes = {
    children: PropTypes.node.isRequired,
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    size: PropTypes.oneOf(Object.values(BUTTON_SIZES)),
    variant: PropTypes.oneOf(Object.values(BUTTON_VARIANTS)),
};

Button.defaultProps = {
    isDisabled: false,
    size: BUTTON_SIZES.LARGE,
    variant: BUTTON_VARIANTS.FILLED,
};

export default Button;
