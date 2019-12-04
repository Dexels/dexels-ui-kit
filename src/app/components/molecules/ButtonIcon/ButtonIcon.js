import { BUTTON_ICON_SIZES } from './ButtonIcon.consts';
import Icon from '../../atoms/Icon/Icon';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledButtonIcon } from './ButtonIcon.sc';

const ButtonIcon = ({
    iconType,
    isDisabled,
    isInverted,
    onClick,
    size,
    ...rest
}) => (
    <StyledButtonIcon
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

ButtonIcon.propTypes = {
    iconType: PropTypes.oneOf(Object.values(ButtonIcon.iconTypes)).isRequired,
    isDisabled: PropTypes.bool,
    isInverted: PropTypes.bool,
    onClick: PropTypes.func,
    size: PropTypes.oneOf(Object.values(ButtonIcon.sizes)),
};

ButtonIcon.defaultProps = {
    isDisabled: false,
    isInverted: false,
    onClick: null,
    size: ButtonIcon.sizes.LARGE,
};

export default ButtonIcon;
