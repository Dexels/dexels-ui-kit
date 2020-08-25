import { ButtonSize, ButtonVariant, Direction, Easing, IconSize, IconType, Size } from '../../../types';
import { LoaderWrapper, StyledButton, TextWrapper } from './Button.sc';
import React, { FunctionComponent, MouseEventHandler, ReactNode } from 'react';
import Loader from '../Loader/Loader';
import { TextWithOptionalIcon } from '../TextWithOptionalIcon/TextWithOptionalIcon';

export interface ButtonProps {
    autoFocus?: boolean;
    children?: ReactNode;
    className?: string;
    direction?: Direction;
    hasNoPadding?: boolean;
    iconType?: IconType;
    isCapitalized?: boolean;
    isDisabled?: boolean;
    isFullWidth?: boolean;
    isInverted?: boolean;
    isLoading?: boolean;
    isTruncatable?: boolean;
    onClick?: MouseEventHandler;
    size?: ButtonSize;
    transitionDuration?: number;
    transitionEasing?: Easing;
    variant?: ButtonVariant;
}

export const Button: FunctionComponent<ButtonProps & { [key: string]: unknown }> = ({
    autoFocus = false,
    children,
    className,
    direction = Direction.LTR,
    hasNoPadding = false,
    iconType,
    isCapitalized = true,
    isDisabled = false,
    isFullWidth = false,
    isInverted = false,
    isLoading = false,
    isTruncatable = false,
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
        hasNoPadding={hasNoPadding}
        isDisabled={isDisabled}
        isFullWidth={isFullWidth}
        isInverted={isInverted}
        isLoading={isLoading}
        isTruncatable={isTruncatable}
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
                isTruncatable={false}
            >
                {children}
            </TextWithOptionalIcon>
        </TextWrapper>
    </StyledButton>
);

export default Button;
