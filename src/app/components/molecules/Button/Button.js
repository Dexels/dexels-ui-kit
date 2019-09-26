import { BUTTON_DIRECTIONS, BUTTON_SIZES, BUTTON_VARIANTS } from './Button.consts';
import Icon from '../../atoms/Icon/Icon';
import IconWrapper from '../../atoms/IconWrapper/IconWrapper';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledButton } from './Button.sc';
import TextWrapper from '../../atoms/TextWrapper/TextWrapper';

const Button = ({
    children,
    direction,
    fullWidth,
    iconType,
    isDisabled,
    onClick,
    size,
    variant,
}) => (
    <StyledButton
        direction={direction}
        fullWidth={fullWidth}
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
        <TextWrapper>
            {children}
        </TextWrapper>
    </StyledButton>
);

Button.directions = BUTTON_DIRECTIONS;
Button.iconTypes = Icon.types;
Button.sizes = BUTTON_SIZES;
Button.variants = BUTTON_VARIANTS;

Button.propTypes = {
    children: PropTypes.node.isRequired,
    direction: PropTypes.oneOf(Object.values(Button.directions)),
    fullWidth: PropTypes.bool,
    iconType: PropTypes.oneOf(Object.values(Button.iconTypes)),
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    size: PropTypes.oneOf(Object.values(Button.sizes)),
    variant: PropTypes.oneOf(Object.values(Button.variants)),
};

Button.defaultProps = {
    direction: Button.directions.LTR,
    fullWidth: false,
    iconType: null,
    isDisabled: false,
    size: Button.sizes.LARGE,
    variant: Button.variants.FILLED,
};

export default Button;
