import { IconWrapper, StyledTextWithOptionalIcon, Text } from './TextWithOptionalIcon.sc';
import Icon from '../../atoms/Icon/Icon';
import PropTypes from 'prop-types';
import React from 'react';
import { TEXT_WITH_OPTIONAL_ICON_DIRECTIONS } from './TextWithOptionalIcon.consts';

const TextWithOptionalIcon = ({ children, direction, iconType }) => (
    <StyledTextWithOptionalIcon direction={direction}>
        <Text>
            {children}
        </Text>
        {iconType && (
            <IconWrapper>
                <Icon type={iconType} />
            </IconWrapper>
        )}
    </StyledTextWithOptionalIcon>
);

TextWithOptionalIcon.directions = TEXT_WITH_OPTIONAL_ICON_DIRECTIONS;
TextWithOptionalIcon.iconTypes = Icon.types;

TextWithOptionalIcon.propTypes = {
    children: PropTypes.node.isRequired,
    direction: PropTypes.oneOf(Object.values(TextWithOptionalIcon.directions)),
    iconType: PropTypes.oneOf(Object.values(TextWithOptionalIcon.iconTypes)),
};

TextWithOptionalIcon.defaultProps = {
    direction: TextWithOptionalIcon.directions.LTR,
    iconType: null,
};

export default TextWithOptionalIcon;
