import {
    BUTTON_DIRECTIONS,
    BUTTON_SIZES,
    BUTTON_TRANSITIONS,
    BUTTON_VARIANTS,
} from './Button.consts';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledButton } from './Button.sc';
import TextWithOptionalIcon from '../TextWithOptionalIcon/TextWithOptionalIcon';

const Button = ({
    autoFocus,
    children,
    direction,
    iconType,
    isDisabled,
    isFullWidth,
    onClick,
    size,
    transitionDuration,
    transitionType,
    variant,
}) => (
    <StyledButton
        autoFocus={autoFocus}
        isDisabled={isDisabled}
        isFullWidth={isFullWidth}
        onClick={onClick}
        size={size}
        transitionDuration={transitionDuration}
        transitionType={transitionType}
        variant={variant}
    >
        <TextWithOptionalIcon direction={direction} iconType={iconType}>
            {children}
        </TextWithOptionalIcon>
    </StyledButton>
);

Button.directions = BUTTON_DIRECTIONS;
Button.iconTypes = TextWithOptionalIcon.iconTypes;
Button.sizes = BUTTON_SIZES;
Button.transitionTypes = BUTTON_TRANSITIONS;
Button.variants = BUTTON_VARIANTS;

Button.propTypes = {
    autoFocus: PropTypes.bool,
    children: PropTypes.node.isRequired,
    direction: PropTypes.oneOf(Object.values(Button.directions)),
    iconType: PropTypes.oneOf(Object.values(Button.iconTypes)),
    isDisabled: PropTypes.bool,
    isFullWidth: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    size: PropTypes.oneOf(Object.values(Button.sizes)),
    transitionDuration: PropTypes.number,
    transitionType: PropTypes.oneOf(Object.values(Button.transitionTypes)),
    variant: PropTypes.oneOf(Object.values(Button.variants)),
};

Button.defaultProps = {
    autoFocus: false,
    direction: Button.directions.LTR,
    iconType: null,
    isDisabled: false,
    isFullWidth: false,
    size: Button.sizes.LARGE,
    transitionDuration: 0.3,
    transitionType: Button.transitionTypes.EASE,
    variant: Button.variants.FILLED,
};

export default Button;
