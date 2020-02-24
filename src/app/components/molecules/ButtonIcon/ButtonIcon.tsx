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
    isDisabled,
    isInverted,
    onClick,
    size,
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

ButtonIcon.defaultProps = {
    className: '',
    isDisabled: false,
    isInverted: false,
    onClick: null,
    size: Size.LARGE,
};

export default ButtonIcon;
