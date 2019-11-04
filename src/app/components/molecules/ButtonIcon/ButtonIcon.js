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

ButtonIcon.types = Icon.types;
ButtonIcon.sizes = BUTTON_ICON_SIZES;

ButtonIcon.propTypes = {
    iconType: PropTypes.oneOf(Object.values(ButtonIcon.types)),
    isDisabled: PropTypes.bool,
    isInverted: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    size: PropTypes.oneOf(Object.values(ButtonIcon.sizes)),
};

ButtonIcon.defaultProps = {
    iconType: ButtonIcon.types.CHEVRONDOWN,
    isDisabled: false,
    isInverted: false,
    size: ButtonIcon.sizes.LARGE,
};

export default ButtonIcon;
