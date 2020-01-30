import {
    IconTypes,
    IconTypesMap,
    Sizes,
    SizesMap,
} from '../../../types';
import { BUTTON_ICON_SIZES } from './ButtonIcon.consts';
import Icon from '../../atoms/Icon/Icon';
import React from 'react';
import { StyledButtonIcon } from './ButtonIcon.sc';

export interface ButtonIconProps {
    className?: string;
    iconType: IconTypes;
    isDisabled?: boolean;
    isInverted?: boolean;
    onClick?: React.MouseEventHandler;
    size?: Sizes;
    /* eslint-disable-next-line typescript-sort-keys/interface */
    [key: string]: any;
}

interface ButtonIconComponent extends React.FunctionComponent<ButtonIconProps> {
    iconTypes: IconTypesMap;
    sizes: SizesMap;
}

export const ButtonIcon: ButtonIconComponent = ({
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

ButtonIcon.iconTypes = Icon.types;
ButtonIcon.sizes = BUTTON_ICON_SIZES;

ButtonIcon.defaultProps = {
    className: '',
    isDisabled: false,
    isInverted: false,
    onClick: null,
    size: ButtonIcon.sizes.LARGE,
};

export default ButtonIcon;
