import { IconType, Size } from '../../../types';
import React, { FunctionComponent, MouseEventHandler } from 'react';
import Icon from '../../atoms/Icon/Icon';
import { StyledButtonIcon } from './ButtonIcon.sc';

export interface ButtonIconProps {
    children?: never;
    className?: string;
    iconType: IconType;
    isDisabled?: boolean;
    isInverted?: boolean;
    onClick?: MouseEventHandler;
    size?: Size;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ButtonIcon: FunctionComponent<ButtonIconProps & { [key: string]: any }> = ({
    className,
    iconType,
    isDisabled = false,
    isInverted = false,
    onClick,
    size = Size.LARGE,
    ...rest
}) => (
    <StyledButtonIcon
        className={className}
        isDisabled={isDisabled}
        isInverted={isInverted}
        onClick={onClick}
        size={size}
        {...rest}
    >
        <Icon type={iconType} />
    </StyledButtonIcon>
);

export default ButtonIcon;
