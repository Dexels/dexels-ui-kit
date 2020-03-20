import { IconType, Size } from '../../../types';
import React, { FunctionComponent, MouseEventHandler } from 'react';
import Icon from '../../atoms/Icon/Icon';
import { StyledButtonIcon } from './ButtonIcon.sc';

export interface ButtonIconProps {
    className?: string;
    iconType: IconType;
    isDisabled?: boolean;
    isInverted?: boolean;
    onClick?: MouseEventHandler;
    size?: Size;
    // eslint-disable-next-line typescript-sort-keys/interface, @typescript-eslint/no-explicit-any
    [key: string]: any;
}

export const ButtonIcon: FunctionComponent<ButtonIconProps> = ({
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
