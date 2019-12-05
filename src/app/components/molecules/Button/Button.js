import {
    BUTTON_DIRECTIONS,
    BUTTON_EASINGS,
    BUTTON_SIZES,
    BUTTON_VARIANTS,
} from './Button.consts';
import { LoaderWrapper, StyledButton, TextWrapper } from './Button.sc';
import Loader from '../Loader/Loader';
import PropTypes from 'prop-types';
import React from 'react';
import TextWithOptionalIcon from '../TextWithOptionalIcon/TextWithOptionalIcon';

const Button = ({
    autoFocus,
    children,
    direction,
    iconType,
    isDisabled,
    isFullWidth,
    isInverted,
    isLoading,
    onClick,
    size,
    transitionDuration,
    transitionEasing,
    variant,
    ...rest
}) => (
    <StyledButton
        autoFocus={autoFocus}
        isDisabled={isDisabled}
        isFullWidth={isFullWidth}
        isInverted={isInverted}
        isLoading={isLoading}
        onClick={onClick}
        size={size}
        transitionDuration={transitionDuration}
        transitionEasing={transitionEasing}
        variant={variant}
        {...rest}
    >
        {isLoading && (
            <LoaderWrapper buttonSize={size}>
                <Loader />
            </LoaderWrapper>
        )}
        <TextWrapper isLoading={isLoading}>
            <TextWithOptionalIcon
                direction={direction}
                iconSize={size}
                iconType={iconType}
                isCapitalized
            >
                {children}
            </TextWithOptionalIcon>
        </TextWrapper>
    </StyledButton>
);

Button.directions = BUTTON_DIRECTIONS;
Button.iconTypes = TextWithOptionalIcon.iconTypes;
Button.sizes = BUTTON_SIZES;
Button.transitionEasings = BUTTON_EASINGS;
Button.variants = BUTTON_VARIANTS;

Button.propTypes = {
    autoFocus: PropTypes.bool,
    children: PropTypes.node.isRequired,
    direction: PropTypes.oneOf(Object.values(Button.directions)),
    iconType: PropTypes.oneOf(Object.values(Button.iconTypes)),
    isDisabled: PropTypes.bool,
    isFullWidth: PropTypes.bool,
    isInverted: PropTypes.bool,
    isLoading: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    size: PropTypes.oneOf(Object.values(Button.sizes)),
    transitionDuration: PropTypes.number,
    transitionEasing: PropTypes.oneOf(Object.values(Button.transitionEasings)),
    variant: PropTypes.oneOf(Object.values(Button.variants)),
};

Button.defaultProps = {
    autoFocus: false,
    direction: Button.directions.LTR,
    iconType: null,
    isDisabled: false,
    isFullWidth: false,
    isInverted: false,
    isLoading: false,
    size: Button.sizes.LARGE,
    transitionDuration: 300,
    transitionEasing: Button.transitionEasings.EASE,
    variant: Button.variants.FILLED,
};

export default Button;
