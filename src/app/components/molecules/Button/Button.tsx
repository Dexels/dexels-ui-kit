import {
    BUTTON_DIRECTIONS,
    BUTTON_EASINGS,
    BUTTON_SIZES,
    BUTTON_VARIANTS,
} from './Button.consts';
import {
    ButtonSizes,
    ButtonVariants,
    ButtonVariantsMap,
    Directions,
    DirectionsMap,
    Easings,
    EasingsMap,
    IconTypes,
    IconTypesMap,
} from '../../../types';
import { LoaderWrapper, StyledButton, TextWrapper } from './Button.sc';
import Loader from '../Loader/Loader';
import React from 'react';
import TextWithOptionalIcon from '../TextWithOptionalIcon/TextWithOptionalIcon';

export interface ButtonProps {
    autoFocus?: boolean;
    className?: string;
    direction?: Directions;
    iconType?: IconTypes;
    isCapitalized?: boolean;
    isDisabled?: boolean;
    isFullWidth?: boolean;
    isInverted?: boolean;
    isLoading?: boolean;
    onClick?: React.MouseEventHandler;
    size?: ButtonSizes;
    transitionDuration?: number;
    transitionEasing?: Easings;
    variant?: ButtonVariants;
    /* eslint-disable-next-line typescript-sort-keys/interface */
    [key: string]: any;
}

interface ButtonComponent extends React.FunctionComponent<ButtonProps> {
    directions: DirectionsMap;
    iconTypes: IconTypesMap;
    sizes: {
        [Size in ButtonProps['size']]: Size;
    };
    transitionEasings: EasingsMap;
    variants: ButtonVariantsMap;
}

export const Button: ButtonComponent = ({
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
            <LoaderWrapper>
                <Loader isInverted={isInverted} size={size} variant={variant} />
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
    transitionEasing: Button.transitionEasings.EASE as Easings,
    variant: Button.variants.OUTLINE,
};

export default Button;
