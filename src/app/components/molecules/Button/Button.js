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
    className,
    direction,
    iconType,
    isCapitalized,
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
        className={className}
        isDisabled={isDisabled}
        isFullWidth={isFullWidth}
        isInverted={isInverted}
        isLoading={isLoading}
        onClick={isDisabled ? null : onClick}
        size={size}
        transitionDuration={transitionDuration}
        transitionEasing={transitionEasing}
        variant={variant}
        {...rest}
    >
        {isLoading && (
            <LoaderWrapper buttonSize={size} variant={variant}>
                <Loader
                    isInverted={isInverted}
                    size={size}
                    variant={variant}
                />
            </LoaderWrapper>
        )}
        <TextWrapper isLoading={isLoading}>
            <TextWithOptionalIcon
                direction={direction}
                iconSize={size}
                iconType={iconType}
                isCapitalized={isCapitalized}
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
    className: PropTypes.string,
    direction: PropTypes.oneOf(Object.values(Button.directions)),
    iconType: PropTypes.oneOf(Object.values(Button.iconTypes)),
    isCapitalized: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isFullWidth: PropTypes.bool,
    isInverted: PropTypes.bool,
    isLoading: PropTypes.bool,
    onClick: PropTypes.func,
    size: PropTypes.oneOf(Object.values(Button.sizes)),
    transitionDuration: PropTypes.number,
    transitionEasing: PropTypes.oneOf(Object.values(Button.transitionEasings)),
    variant: PropTypes.oneOf(Object.values(Button.variants)),
};

Button.defaultProps = {
    autoFocus: false,
    className: '',
    direction: Button.directions.LTR,
    iconType: null,
    isCapitalized: true,
    isDisabled: false,
    isFullWidth: false,
    isInverted: false,
    isLoading: false,
    onClick: null,
    size: Button.sizes.LARGE,
    transitionDuration: 300,
    transitionEasing: Button.transitionEasings.EASE,
    variant: Button.variants.OUTLINE,
};

export default Button;
