import { Direction, Easing, IconSize, IconType } from '../../../types';
import React, { FunctionComponent, MouseEventHandler, ReactNode } from 'react';
import { StyledChip } from './Chip.sc';
import TextWithOptionalIcon from '../TextWithOptionalIcon/TextWithOptionalIcon';

export interface ChipProps {
    children?: ReactNode;
    className?: string;
    direction?: Direction;
    iconSize?: IconSize;
    iconType?: IconType;
    isDisabled?: boolean;
    isSelected?: boolean;
    onClick?: MouseEventHandler;
    transitionDuration?: number;
    transitionEasing?: Easing;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Chip: FunctionComponent<ChipProps & { [key: string]: any }> = ({
    children,
    className,
    direction = Direction.LTR,
    iconSize = IconSize.MEDIUM,
    iconType,
    isDisabled = false,
    isSelected = true,
    onClick,
    transitionDuration = 300,
    transitionEasing = Easing.EASE,
    ...rest
}) => (
    <StyledChip
        className={className}
        isDisabled={isDisabled}
        isHoverable={!isDisabled && Boolean(onClick)}
        isSelected={isSelected}
        onClick={isDisabled ? undefined : onClick}
        transitionDuration={transitionDuration}
        transitionEasing={transitionEasing}
        {...rest}
    >
        <TextWithOptionalIcon direction={direction} iconSize={iconSize} iconType={iconType}>
            {children}
        </TextWithOptionalIcon>
    </StyledChip>
);

export default Chip;
