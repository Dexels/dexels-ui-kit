import { CHIP_STATUS_DIRECTIONS, CHIP_STATUS_ICON_TYPES, CHIP_STATUS_VARIANTS } from './ChipStatus.consts';
import { ChipStatusVariants, ChipStatusVariantsMap } from './types';
import {
    Directions,
    DirectionsMap,
    IconTypes,
    IconTypesMap,
} from '../../../types';
import Chip from '../../molecules/Chip/Chip';
import React from 'react';

export interface ChipStatusProps {
    children: React.ReactNode;
    className?: string;
    direction?: Directions;
    isDisabled?: boolean;
    onClick?: React.MouseEventHandler;
    variant?: ChipStatusVariants;
}

interface ChipStatusComponent extends React.FunctionComponent<ChipStatusProps> {
    directions: DirectionsMap;
    iconTypes: IconTypesMap;
    variants: ChipStatusVariantsMap;
}

const getIconType = (variant: ChipStatusVariants): IconTypes | null => {
    switch (variant) {
        case CHIP_STATUS_VARIANTS.SELECTED:
            return CHIP_STATUS_ICON_TYPES.CHECK;

        case CHIP_STATUS_VARIANTS.DESELECTED:
            return null;

        case CHIP_STATUS_VARIANTS.INDETERMINATE:
            return CHIP_STATUS_ICON_TYPES.MINUS;

        default:
            return null;
    }
};

const isSelected = (variant: ChipStatusVariants) => (
    variant === CHIP_STATUS_VARIANTS.SELECTED
);

export const ChipStatus: ChipStatusComponent = ({
    children,
    className,
    direction,
    variant,
    isDisabled,
    onClick,
}) => (
    <Chip
        className={className}
        direction={direction}
        iconType={getIconType(variant)}
        isDisabled={isDisabled}
        isSelected={isSelected(variant)}
        onClick={isDisabled ? null : onClick}
    >
        {children}
    </Chip>
);

ChipStatus.directions = CHIP_STATUS_DIRECTIONS;
ChipStatus.iconTypes = CHIP_STATUS_ICON_TYPES;
ChipStatus.variants = CHIP_STATUS_VARIANTS;

ChipStatus.defaultProps = {
    className: '',
    direction: ChipStatus.directions.LTR,
    isDisabled: false,
    onClick: null,
    variant: ChipStatus.variants.SELECTED,
};

export default ChipStatus;
