import { BUTTON_DIRECTIONS, BUTTON_SIZES, BUTTON_VARIANTS } from './Button.consts';
import { IconWrapper, StyledButton, Text } from './Button.sc';
import Icon from '../../atoms/Icon/Icon';
import PropTypes from 'prop-types';
import React from 'react';

const Button = ({
    children,
    direction,
    iconType,
    isDisabled,
    onClick,
    size,
    variant,
}) => (
    <StyledButton
        direction={direction}
        isDisabled={isDisabled}
        onClick={onClick}
        size={size}
        variant={variant}
    >
        {iconType && (
            <IconWrapper>
                <Icon type={iconType} />
            </IconWrapper>
        )}
        <Text>
            {children}
        </Text>
    </StyledButton>
);

Button.directions = BUTTON_DIRECTIONS;
Button.iconTypes = Icon.types;
Button.sizes = BUTTON_SIZES;
Button.variants = BUTTON_VARIANTS;

Button.propTypes = {
    children: PropTypes.node.isRequired,
    direction: PropTypes.oneOf(Object.values(Button.directions)),
    iconType: PropTypes.oneOf(Object.values(Button.iconTypes)),
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    size: PropTypes.oneOf(Object.values(Button.sizes)),
    variant: PropTypes.oneOf(Object.values(Button.variants)),
};

Button.defaultProps = {
    direction: Button.directions.LTR,
    iconType: null,
    isDisabled: false,
    size: Button.sizes.LARGE,
    variant: Button.variants.FILLED,
};

export default Button;
