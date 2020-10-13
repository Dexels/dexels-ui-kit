import { IconType, Size } from '../../../types';
import React, { FunctionComponent, MouseEventHandler } from 'react';
import { IconCustomizable } from '../IconCustomizable/IconCustomizable';
import { IconCustomizableSize } from '../IconCustomizable';
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
}) => {
    let iconSize;

    switch (size) {
        case Size.SMALL:
            iconSize = IconCustomizableSize.SIZE14;
            break;

        case Size.MEDIUM:
            iconSize = IconCustomizableSize.SIZE18;
            break;

        case Size.LARGE:
            iconSize = IconCustomizableSize.SIZE20;
            break;

        case Size.XLARGE:
            iconSize = IconCustomizableSize.SIZE24;
            break;

        default:
            iconSize = IconCustomizableSize.SIZE20;
            break;
    }

    return (
        <StyledButtonIcon
            className={className}
            isDisabled={isDisabled}
            isInverted={isInverted}
            onClick={!isDisabled && onClick ? onClick : undefined}
            size={size}
            {...rest}
        >
            <IconCustomizable iconSize={iconSize} iconType={iconType} />
        </StyledButtonIcon>
    );
};

export default ButtonIcon;
