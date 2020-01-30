import { Elevations, ElevationsMap } from '../../../types';
import CARD_ELEVATIONS from './Card.consts';
import React from 'react';
import { StyledCard } from './Card.sc';

export interface CardProps {
    className?: string;
    elevation?: Elevations;
    hasBorderRadius?: boolean;
}

export interface CardComponent extends React.FunctionComponent<CardProps> {
    elevations: ElevationsMap;
}

export const Card: CardComponent = ({
    children,
    className,
    elevation,
    hasBorderRadius,
}) => (
    <StyledCard className={className} elevation={elevation} hasBorderRadius={hasBorderRadius}>
        {children}
    </StyledCard>
);

Card.elevations = CARD_ELEVATIONS;

Card.defaultProps = {
    className: '',
    elevation: Card.elevations.LEVEL_1,
    hasBorderRadius: true,
};

export default Card;
