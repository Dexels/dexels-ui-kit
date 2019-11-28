import { IconWrapper, StyledTextWithOptionalIcon, Text } from './TextWithOptionalIcon.sc';
import { TEXT_WITH_OPTIONAL_ICON_DIRECTIONS, TEXT_WITH_OPTIONAL_ICON_SIZES } from './TextWithOptionalIcon.consts';
import Icon from '../../atoms/Icon/Icon';
import PropTypes from 'prop-types';
import React from 'react';

const TextWithOptionalIcon = ({
    children,
    direction,
    iconSize,
    iconType,
    isCapitalized,
    isTruncatable,
    ...rest
}) => (
    <StyledTextWithOptionalIcon direction={direction} {...rest}>
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

TextWithOptionalIcon.propTypes = {
    children: PropTypes.node.isRequired,
    direction: PropTypes.oneOf(Object.values(TextWithOptionalIcon.directions)),
    iconSize: PropTypes.oneOf(Object.values(TextWithOptionalIcon.iconSizes)),
    iconType: PropTypes.oneOf(Object.values(TextWithOptionalIcon.iconTypes)),
    isCapitalized: PropTypes.bool,
    isTruncatable: PropTypes.bool,
};

TextWithOptionalIcon.defaultProps = {
    direction: TextWithOptionalIcon.directions.LTR,
    iconSize: TextWithOptionalIcon.iconSizes.LARGE,
    iconType: null,
    isCapitalized: false,
    isTruncatable: false,
};

export default TextWithOptionalIcon;
