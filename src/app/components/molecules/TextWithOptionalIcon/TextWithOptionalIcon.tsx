import { Direction, IconSize, IconType } from '../../../types';
import { IconWrapper, StyledTextWithOptionalIcon, Text } from './TextWithOptionalIcon.sc';
import React, { FunctionComponent, ReactNode } from 'react';
import { IconCustomizable } from '../IconCustomizable/IconCustomizable';
import { IconCustomizableSize } from '../IconCustomizable/types';

export interface TextWithOptionalIconProps {
    children?: ReactNode;
    className?: string;
    direction?: Direction;
    iconSize?: IconSize;
    iconType?: IconType;
    isCapitalized?: boolean;
    isSelectable?: boolean;
    isTruncatable?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const TextWithOptionalIcon: FunctionComponent<TextWithOptionalIconProps & { [key: string]: any }> = ({
    children,
    className,
    direction = Direction.LTR,
    iconSize = IconSize.LARGE,
    iconType,
    isCapitalized = false,
    isSelectable = true,
    isTruncatable = false,
    ...rest
}) => {
    let size;

    switch (iconSize) {
        case IconSize.XSMALL:
            size = IconCustomizableSize.SIZE14;
            break;

        case IconSize.SMALL:
            size = IconCustomizableSize.SIZE18;
            break;

        case IconSize.MEDIUM:
            size = IconCustomizableSize.SIZE20;
            break;

        case IconSize.LARGE:
            size = IconCustomizableSize.SIZE24;
            break;

        case IconSize.XLARGE:
            size = IconCustomizableSize.SIZE28;
            break;

        default:
            size = IconCustomizableSize.SIZE24;
            break;
    }

    return (
        <StyledTextWithOptionalIcon className={className} direction={direction} {...rest}>
            <Text isCapitalized={isCapitalized} isSelectable={isSelectable} isTruncatable={isTruncatable}>
                {children}
            </Text>
            {iconType && (
                <IconWrapper size={iconSize}>
                    <IconCustomizable iconSize={size} iconType={iconType} />
                </IconWrapper>
            )}
        </StyledTextWithOptionalIcon>
    );
};

export default TextWithOptionalIcon;
