import { CHIP_STATUS_DIRECTIONS, CHIP_STATUS_VARIANTS } from './ChipStatus.consts';
import Chip from '../../molecules/Chip/Chip';
import PropTypes from 'prop-types';
import React from 'react';

const getIconType = (variant) => {
    switch (variant) {
        case CHIP_STATUS_VARIANTS.SELECTED:
            return 'Check';

        case CHIP_STATUS_VARIANTS.INDETERMINATE:
            return 'Minus';

        default:
            return null;
    }
};

const isSelected = (variant) => (
    variant !== CHIP_STATUS_VARIANTS.DESELECTED
);

const ChipStatus = ({
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

ChipStatus.directions = CHIP_STATUS_DIRECTIONS;
ChipStatus.variants = CHIP_STATUS_VARIANTS;

ChipStatus.propTypes = {
    children: PropTypes.node.isRequired,
    direction: PropTypes.oneOf(Object.values(ChipStatus.directions)),
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    variant: PropTypes.oneOf(Object.values(ChipStatus.variants)),
};

ChipStatus.defaultProps = {
    direction: ChipStatus.directions.LTR,
    isDisabled: false,
    variant: ChipStatus.variants.SELECTED,
};

export default ChipStatus;
