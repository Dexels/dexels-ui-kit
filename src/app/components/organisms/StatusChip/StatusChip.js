import { STATUSCHIP_DIRECTIONS, STATUSCHIP_VARIANTS } from './StatusChip.consts';
import Chip from '../../molecules/Chip/Chip';
import PropTypes from 'prop-types';
import React from 'react';

function getIconType(variant) {
    let result = null;

    if (variant === STATUSCHIP_VARIANTS.SELECTED) {
        result = 'Check';
    } else if (variant === STATUSCHIP_VARIANTS.INDETERMINATE) {
        result = 'Minus';
    } else if (variant === STATUSCHIP_VARIANTS.HANDLE_ALL) {
        result = 'Minus';
    }

    return result;
}

function isSelected(variant) {
    let result = true;

    if (variant === STATUSCHIP_VARIANTS.DESELECTED) {
        result = false;
    }

    return result;
}

const StatusChip = ({
    children,
    direction,
    variant,
    isDisabled,
    onClick,
}) => (
    <Chip
        direction={direction}
        iconType={getIconType(variant)}
        isDisabled={isDisabled}
        isSelected={isSelected(variant)}
        onClick={onClick}
    >
        {children}
    </Chip>
);

StatusChip.directions = STATUSCHIP_DIRECTIONS;
StatusChip.variants = STATUSCHIP_VARIANTS;

StatusChip.propTypes = {
    children: PropTypes.node.isRequired,
    direction: PropTypes.oneOf(Object.values(StatusChip.directions)),
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    variant: PropTypes.oneOf(Object.values(StatusChip.variants)),
};

StatusChip.defaultProps = {
    direction: StatusChip.directions.LTR,
    isDisabled: false,
    variant: StatusChip.variants.SELECTED,
};

export default StatusChip;
