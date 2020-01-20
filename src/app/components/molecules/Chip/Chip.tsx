import { CHIP_DIRECTIONS, CHIP_EASINGS, CHIP_ICON_SIZES } from './Chip.consts';
import {
    Directions,
    DirectionsMap,
    Easings,
    EasingsMap,
    IconTypes,
    IconTypesMap,
} from '../../../types';
import React from 'react';
import { StyledChip } from './Chip.sc';
import TextWithOptionalIcon from '../TextWithOptionalIcon/TextWithOptionalIcon';

export interface ChipProps {
    children: React.ReactNode;
    className?: string;
    direction?: Directions;
    iconSize?: 'LARGE' | 'MEDIUM' | 'SMALL';
    iconType?: IconTypes;
    isDisabled?: boolean;
    isSelected?: boolean;
    onClick?: React.MouseEventHandler;
    transitionDuration?: number;
    transitionEasing?: Easings;
    /* eslint-disable-next-line typescript-sort-keys/interface */
    [key: string]: any;
}

interface ChipComponent extends React.FunctionComponent<ChipProps> {
    directions: DirectionsMap;
    iconSizes: {
        [Size in ChipProps['iconSize']]: Size;
    };
    iconTypes: IconTypesMap;
    transitionEasings: EasingsMap;
}

export const Chip: ChipComponent = ({
    children,
    className,
    direction,
    iconType,
    iconSize,
    isDisabled,
    isSelected,
    onClick,
    transitionDuration,
    transitionEasing,
    ...rest
}) => (
    <StyledChip
        className={className}
        isDisabled={isDisabled}
        isHoverable={!isDisabled && Boolean(onClick)}
        isSelected={isSelected}
        onClick={isDisabled ? null : onClick}
        transitionDuration={transitionDuration}
        transitionEasing={transitionEasing}
        {...rest}
    >
        <TextWithOptionalIcon direction={direction} iconSize={iconSize} iconType={iconType}>
            {children}
        </TextWithOptionalIcon>
    </StyledChip>
);

Chip.directions = CHIP_DIRECTIONS;
Chip.iconSizes = CHIP_ICON_SIZES;
Chip.iconTypes = TextWithOptionalIcon.iconTypes;
Chip.transitionEasings = CHIP_EASINGS;

Chip.defaultProps = {
    className: '',
    direction: Chip.directions.LTR,
    iconSize: Chip.iconSizes.MEDIUM,
    iconType: null,
    isDisabled: false,
    isSelected: true,
    onClick: null,
    transitionDuration: 300,
    transitionEasing: Chip.transitionEasings.EASE as Easings,
};

export default Chip;
