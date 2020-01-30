import { CARD_STATUS_PLACEMENTS, CARD_STATUS_STATUSES } from './CardStatus.consts';
import {
    Elevations,
    ElevationsMap,
    Placements,
    PlacementsMap,
    Statuses,
    StatusesMap,
} from '../../../types';
import Card from '../../atoms/Card/Card';
import React from 'react';
import { StyledCardStatus } from './CardStatus.sc';

export interface CardStatusProps {
    children: React.ReactNode;
    className?: string;
    elevation?: Elevations;
    hasBorderRadius?: boolean;
    placement?: Placements;
    status?: Statuses;
}

interface CardStatusComponent extends React.FunctionComponent<CardStatusProps> {
    elevations: ElevationsMap;
    placements: PlacementsMap;
    statuses: StatusesMap;
}

export const CardStatus: CardStatusComponent = ({
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

CardStatus.elevations = Card.elevations;
CardStatus.placements = CARD_STATUS_PLACEMENTS;
CardStatus.statuses = CARD_STATUS_STATUSES;

CardStatus.defaultProps = {
    className: '',
    elevation: Card.defaultProps.elevation,
    hasBorderRadius: false,
    placement: CardStatus.placements.TOP,
    status: CardStatus.statuses.DEFAULT,
};

export default CardStatus;
