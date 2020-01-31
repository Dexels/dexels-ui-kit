import { Direction, IconSize, IconType } from '../../../types';
import { IconWrapper, StyledTextWithOptionalIcon, Text } from './TextWithOptionalIcon.sc';
import Icon from '../../atoms/Icon/Icon';
import React from 'react';

export interface TextWithOptionalIconProps {
    children: React.ReactNode;
    className?: string;
    direction?: Direction;
    iconSize?: IconSize;
    iconType?: IconType;
    isCapitalized?: boolean;
    isTruncatable?: boolean;
    /* eslint-disable-next-line typescript-sort-keys/interface */
    [key: string]: any;
}

export const TextWithOptionalIcon: React.FunctionComponent<TextWithOptionalIconProps> = ({
    children,
    className,
    direction,
    iconSize,
    iconType,
    isCapitalized,
    isTruncatable,
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

TextWithOptionalIcon.defaultProps = {
    className: '',
    direction: Direction.LTR,
    iconSize: IconSize.LARGE,
    iconType: null,
    isCapitalized: false,
    isTruncatable: false,
};

export default TextWithOptionalIcon;
