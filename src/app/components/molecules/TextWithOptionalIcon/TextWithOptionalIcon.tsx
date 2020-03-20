import { Direction, IconSize, IconType } from '../../../types';
import { IconWrapper, StyledTextWithOptionalIcon, Text } from './TextWithOptionalIcon.sc';
import React, { FunctionComponent, ReactNode } from 'react';
import Icon from '../../atoms/Icon/Icon';

export interface TextWithOptionalIconProps {
    children: ReactNode;
    className?: string;
    direction?: Direction;
    iconSize?: IconSize;
    iconType?: IconType;
    isCapitalized?: boolean;
    isTruncatable?: boolean;
    // eslint-disable-next-line typescript-sort-keys/interface, @typescript-eslint/no-explicit-any
    [key: string]: any;
}

export const TextWithOptionalIcon: FunctionComponent<TextWithOptionalIconProps> = ({
    children,
    className,
    direction = Direction.LTR,
    iconSize = IconSize.LARGE,
    iconType,
    isCapitalized = false,
    isTruncatable = false,
    ...rest
}) => (
    <StyledTextWithOptionalIcon className={className} direction={direction} {...rest}>
        <Text isCapitalized={isCapitalized} isTruncatable={isTruncatable}>
            {children}
        </Text>
        {iconType && (
            <IconWrapper size={iconSize}>
                <Icon type={iconType} />
            </IconWrapper>
        )}
    </StyledTextWithOptionalIcon>
);

export default TextWithOptionalIcon;
