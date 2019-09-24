import { BUTTONICON_SIZES } from './ButtonIcon.consts';
import Icon from '../../atoms/Icon/Icon';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledButtonIcon } from './ButtonIcon.sc';

const ButtonIcon = ({
    isDisabled,
    onClick,
    size,
    iconType,
}) => (
    <StyledButtonIcon
        isDisabled={isDisabled}
        onClick={onClick}
        size={size}
    >
        <Icon type={iconType} />
    </StyledButtonIcon>
);

ButtonIcon.types = Icon.types;
ButtonIcon.sizes = BUTTONICON_SIZES;

ButtonIcon.propTypes = {
    iconType: PropTypes.oneOf(Object.values(ButtonIcon.types)),
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    size: PropTypes.oneOf(Object.values(ButtonIcon.sizes)),
};

ButtonIcon.defaultProps = {
    iconType: ButtonIcon.types.CHEVRON_DOWN,
    isDisabled: false,
    size: ButtonIcon.sizes.LARGE,
};

export default ButtonIcon;
