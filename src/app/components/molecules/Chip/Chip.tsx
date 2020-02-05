import {
    Direction,
    Easing,
    IconSize,
    IconType,
} from '../../../types';
import React from 'react';
import { StyledChip } from './Chip.sc';
import TextWithOptionalIcon from '../TextWithOptionalIcon/TextWithOptionalIcon';

export interface ChipProps {
    children: React.ReactNode;
    className?: string;
    direction?: Direction;
    iconSize?: IconSize;
    iconType?: IconType;
    isDisabled?: boolean;
    isSelected?: boolean;
    onClick?: React.MouseEventHandler;
    transitionDuration?: number;
    transitionEasing?: Easing;
    /* eslint-disable-next-line typescript-sort-keys/interface */
    [key: string]: any;
}

export const Chip: React.FunctionComponent<ChipProps> = ({
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
        <TextWithOptionalIcon
            direction={direction}
            iconSize={iconSize}
            iconType={iconType}
        >
            {children}
        </TextWithOptionalIcon>
    </StyledChip>
);

Chip.defaultProps = {
    className: '',
    direction: Direction.LTR,
    iconSize: IconSize.MEDIUM,
    iconType: null,
    isDisabled: false,
    isSelected: true,
    onClick: null,
    transitionDuration: 300,
    transitionEasing: Easing.EASE,
};

export default Chip;
