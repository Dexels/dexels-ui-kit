import {
    Elevation,
    Placement,
    Status,
} from '../../../types';
import Card from '../../atoms/Card/Card';
import React from 'react';
import { StyledCardStatus } from './CardStatus.sc';

export interface CardStatusProps {
    children: React.ReactNode;
    className?: string;
    elevation?: Elevation;
    hasBorderRadius?: boolean;
    placement?: Placement;
    status?: Status;
}

export const CardStatus: React.FunctionComponent<CardStatusProps> = ({
    children,
    className,
    elevation,
    hasBorderRadius,
    placement,
    status,
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

CardStatus.defaultProps = {
    className: '',
    elevation: Card.defaultProps.elevation,
    hasBorderRadius: false,
    placement: Placement.TOP,
    status: Status.DEFAULT,
};

export default CardStatus;
