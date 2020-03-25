import {
    Elevation,
    Placement,
    Status,
} from '../../../types';
import React, { FunctionComponent, ReactNode } from 'react';
import { StyledCardStatus } from './CardStatus.sc';

export interface CardStatusProps {
    children?: ReactNode;
    className?: string;
    elevation?: Elevation;
    hasBorderRadius?: boolean;
    placement?: Placement;
    status?: Status;
}

export const CardStatus: FunctionComponent<CardStatusProps> = ({
    children,
    className,
    elevation,
    hasBorderRadius = false,
    placement = Placement.TOP,
    status = Status.DEFAULT,
}) => (
    <StyledCardStatus
        className={className}
        elevation={elevation}
        hasBorderRadius={hasBorderRadius}
        placement={placement}
        status={status}
    >
        {children}
    </StyledCardStatus>
);

export default CardStatus;
