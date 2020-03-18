import { IconType, Size } from '../../../types';
import Icon from '../../atoms/Icon/Icon';
import React from 'react';
import { StyledButtonIcon } from './ButtonIcon.sc';

export interface ButtonIconProps {
    className?: string;
    iconType: IconType;
    isDisabled?: boolean;
    isInverted?: boolean;
    onClick?: React.MouseEventHandler;
    size?: Size;
    // eslint-disable-next-line typescript-sort-keys/interface, @typescript-eslint/no-explicit-any
    [key: string]: any;
}

export const ButtonIcon: React.FunctionComponent<ButtonIconProps> = ({
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
