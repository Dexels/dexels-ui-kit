import { Direction, IconType } from '../../../types';
import Chip from '../../molecules/Chip/Chip';
import { ChipStatusVariant } from './types';
import React from 'react';

export interface ChipStatusProps {
    children: React.ReactNode;
    className?: string;
    direction?: Direction;
    isDisabled?: boolean;
    onClick?: React.MouseEventHandler;
    variant?: ChipStatusVariant;
}

const getIconType = (variant: ChipStatusVariant): IconType | null => {
    switch (variant) {
        case ChipStatusVariant.SELECTED:
            return IconType.CHECK;

        case ChipStatusVariant.DESELECTED:
            return null;

        case ChipStatusVariant.INDETERMINATE:
            return IconType.MINUS;

        default:
            return null;
    }
};

const isSelected = (variant: ChipStatusVariant) => (
    variant === ChipStatusVariant.SELECTED
);

export const ChipStatus: React.FunctionComponent<ChipStatusProps> = ({
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

ChipStatus.defaultProps = {
    className: '',
    direction: Direction.LTR,
    isDisabled: false,
    onClick: null,
    variant: ChipStatusVariant.SELECTED,
};

export default ChipStatus;
