import { STATUSCHIP_DIRECTIONS, STATUSCHIP_VARIANTS } from './StatusChip.consts';
import Chip from '../../molecules/Chip/Chip';
import PropTypes from 'prop-types';
import React from 'react';

function getIconType(variant) {
    switch (variant) {
        case STATUSCHIP_VARIANTS.SELECTED:
            return 'Check';

        case STATUSCHIP_VARIANTS.INDETERMINATE:
            return 'Minus';

        default:
            return null;
    }
}

function isSelected(variant) {
    return variant !== STATUSCHIP_VARIANTS.DESELECTED;
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
