import {
    ButtonSize,
    ButtonVariant,
    Direction,
    Easing,
    IconSize,
    IconType,
    Size,
} from '../../../types';
import { LoaderWrapper, StyledButton, TextWrapper } from './Button.sc';
import Loader from '../Loader/Loader';
import React from 'react';
import { TextWithOptionalIcon } from '../TextWithOptionalIcon/TextWithOptionalIcon';

export interface ButtonProps {
    autoFocus?: boolean;
    className?: string;
    direction?: Direction;
    iconType?: IconType;
    isCapitalized?: boolean;
    isDisabled?: boolean;
    isFullWidth?: boolean;
    isInverted?: boolean;
    isLoading?: boolean;
    onClick?: React.MouseEventHandler;
    size?: ButtonSize;
    transitionDuration?: number;
    transitionEasing?: Easing;
    variant?: ButtonVariant;
    // eslint-disable-next-line typescript-sort-keys/interface, @typescript-eslint/no-explicit-any
    [key: string]: any;
}

export const Button: React.FunctionComponent<ButtonProps> = ({
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
                <Loader isInverted={isInverted} size={Size[size]} variant={variant} />
            </LoaderWrapper>
        )}
        <TextWrapper isLoading={isLoading}>
            <TextWithOptionalIcon
                direction={direction}
                iconSize={IconSize[size]}
                iconType={iconType}
                isCapitalized={isCapitalized}
            >
                {children}
            </TextWithOptionalIcon>
        </TextWrapper>
    </StyledButton>
);

Button.defaultProps = {
    autoFocus: false,
    className: '',
    direction: Direction.LTR,
    iconType: null,
    isCapitalized: true,
    isDisabled: false,
    isFullWidth: false,
    isInverted: false,
    isLoading: false,
    onClick: null,
    size: ButtonSize.LARGE,
    transitionDuration: 300,
    transitionEasing: Easing.EASE,
    variant: ButtonVariant.OUTLINE,
};

export default Button;
