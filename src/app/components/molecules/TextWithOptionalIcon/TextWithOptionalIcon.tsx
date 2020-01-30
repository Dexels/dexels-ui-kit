import {
    Directions,
    DirectionsMap,
    IconTypes,
    IconTypesMap,
    SizesMap,
} from '../../../types';
import { IconWrapper, StyledTextWithOptionalIcon, Text } from './TextWithOptionalIcon.sc';
import { TEXT_WITH_OPTIONAL_ICON_DIRECTIONS, TEXT_WITH_OPTIONAL_ICON_SIZES } from './TextWithOptionalIcon.consts';
import Icon from '../../atoms/Icon/Icon';
import React from 'react';

export interface TextWithOptionalIconProps {
    children: React.ReactNode;
    className?: string;
    direction?: Directions;
    iconType?: IconTypes;
    isCapitalized?: boolean;
    isTruncatable?: boolean;
    /* eslint-disable-next-line typescript-sort-keys/interface */
    [key: string]: any;
}

interface TextWithOptionalIconComponent extends React.FunctionComponent<TextWithOptionalIconProps> {
    directions: DirectionsMap;
    iconSizes: SizesMap;
    iconTypes: IconTypesMap;
}

export const TextWithOptionalIcon: TextWithOptionalIconComponent = ({
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

TextWithOptionalIcon.directions = TEXT_WITH_OPTIONAL_ICON_DIRECTIONS;
TextWithOptionalIcon.iconSizes = TEXT_WITH_OPTIONAL_ICON_SIZES;
TextWithOptionalIcon.iconTypes = Icon.types;

TextWithOptionalIcon.defaultProps = {
    className: '',
    direction: TextWithOptionalIcon.directions.LTR,
    iconSize: TextWithOptionalIcon.iconSizes.LARGE,
    iconType: null,
    isCapitalized: false,
    isTruncatable: false,
};

export default TextWithOptionalIcon;
