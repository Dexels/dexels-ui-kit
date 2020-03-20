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
import React, { FunctionComponent, MouseEventHandler } from 'react';
import Loader from '../Loader/Loader';
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
    onClick?: MouseEventHandler;
    size?: ButtonSize;
    transitionDuration?: number;
    transitionEasing?: Easing;
    variant?: ButtonVariant;
    // eslint-disable-next-line typescript-sort-keys/interface, @typescript-eslint/no-explicit-any
    [key: string]: any;
}

export const Button: FunctionComponent<ButtonProps> = ({
    autoFocus = false,
    children,
    className,
    direction = Direction.LTR,
    iconType,
    isCapitalized = true,
    isDisabled = false,
    isFullWidth = false,
    isInverted = false,
    isLoading = false,
    onClick,
    size = ButtonSize.LARGE,
    transitionDuration = 300,
    transitionEasing = Easing.EASE,
    variant = ButtonVariant.OUTLINE,
    ...rest
}) => (
    <StyledButton
        autoFocus={autoFocus}
        className={className}
        isDisabled={isDisabled}
        isFullWidth={isFullWidth}
        isInverted={isInverted}
        isLoading={isLoading}
        onClick={isDisabled ? undefined : onClick}
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

export default Button;
