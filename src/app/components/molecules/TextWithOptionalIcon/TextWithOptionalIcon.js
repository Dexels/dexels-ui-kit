import { IconWrapper, StyledTextWithOptionalIcon, Text } from './TextWithOptionalIcon.sc';
import { TEXT_WITH_OPTIONAL_ICON_COLORS, TEXT_WITH_OPTIONAL_ICON_DIRECTIONS } from './TextWithOptionalIcon.consts';
import Icon from '../../atoms/Icon/Icon';
import PropTypes from 'prop-types';
import React from 'react';

const TextWithOptionalIcon = ({
    children,
    direction,
    iconColor,
    iconSize,
    iconType,
}) => (
    <StyledTextWithOptionalIcon direction={direction}>
        <Text>
            {children}
        </Text>
        {iconType && (
            <IconWrapper>
                <Icon color={iconColor} size={iconSize} type={iconType} />
            </IconWrapper>
        )}
    </StyledTextWithOptionalIcon>
);

TextWithOptionalIcon.iconColors = TEXT_WITH_OPTIONAL_ICON_COLORS;
TextWithOptionalIcon.directions = TEXT_WITH_OPTIONAL_ICON_DIRECTIONS;
TextWithOptionalIcon.iconTypes = Icon.types;

TextWithOptionalIcon.propTypes = {
    children: PropTypes.node.isRequired,
    direction: PropTypes.oneOf(Object.values(TextWithOptionalIcon.directions)),
    iconColor: PropTypes.oneOf(Object.values(TextWithOptionalIcon.iconColors)),
    iconSize: PropTypes.string,
    iconType: PropTypes.oneOf(Object.values(TextWithOptionalIcon.iconTypes)),
};

TextWithOptionalIcon.defaultProps = {
    direction: TextWithOptionalIcon.directions.LTR,
    iconColor: null,
    iconSize: '24px',
    iconType: null,
};

export default TextWithOptionalIcon;
