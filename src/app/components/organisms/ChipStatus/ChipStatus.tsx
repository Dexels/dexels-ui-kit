import { Direction, IconType } from '../../../types';
import React, { FunctionComponent, MouseEventHandler, ReactNode } from 'react';
import Chip from '../../molecules/Chip/Chip';
import { ChipStatusVariant } from './types';

export interface ChipStatusProps {
    children?: ReactNode;
    className?: string;
    direction?: Direction;
    isDisabled?: boolean;
    onClick?: MouseEventHandler;
    variant?: ChipStatusVariant;
}

// Leaving the switch, because this might change in the (near) future
const getIconType = (variant: ChipStatusVariant): IconType | undefined => {
    switch (variant) {
        case ChipStatusVariant.SELECTED:
            return IconType.CHECK;

        case ChipStatusVariant.DESELECTED:
            return undefined;

        case ChipStatusVariant.INDETERMINATE:
            return undefined;

        default:
            return undefined;
    }
};

const isSelected = (variant: ChipStatusVariant): boolean => (
    variant === ChipStatusVariant.SELECTED
);

export const ChipStatus: FunctionComponent<ChipStatusProps> = ({
    children,
    className,
    direction,
    isDisabled,
    onClick,
    variant = ChipStatusVariant.SELECTED,
}) => (
    <Chip
        className={className}
        direction={direction}
        iconType={getIconType(variant)}
        isDisabled={isDisabled}
        isSelected={isSelected(variant)}
        onClick={isDisabled ? undefined : onClick}
    >
        {children}
    </Chip>
);

export default ChipStatus;
