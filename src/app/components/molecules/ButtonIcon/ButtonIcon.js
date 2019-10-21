import { BUTTON_ICON_SIZES, BUTTON_ICON_VARIANTS } from './ButtonIcon.consts';
import Icon from '../../atoms/Icon/Icon';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledButtonIcon } from './ButtonIcon.sc';

const ButtonIcon = ({
    iconType,
    isDisabled,
    onClick,
    size,
    variant,
}) => (
    <StyledButtonIcon
        isDisabled={isDisabled}
        onClick={onClick}
        size={size}
        variant={variant}
    >
        <Icon type={iconType} />
    </StyledButtonIcon>
);

ButtonIcon.types = Icon.types;
ButtonIcon.sizes = BUTTON_ICON_SIZES;
ButtonIcon.variants = BUTTON_ICON_VARIANTS;

ButtonIcon.propTypes = {
    iconType: PropTypes.oneOf(Object.values(ButtonIcon.types)),
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    size: PropTypes.oneOf(Object.values(ButtonIcon.sizes)),
    variant: PropTypes.oneOf(Object.values(ButtonIcon.variants)),
};

ButtonIcon.defaultProps = {
    iconType: ButtonIcon.types.CHEVRONDOWN,
    isDisabled: false,
    size: ButtonIcon.sizes.LARGE,
    variant: ButtonIcon.variants.DEFAULT,
};

export default ButtonIcon;
