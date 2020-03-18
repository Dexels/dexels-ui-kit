import { Elevation } from '../../../types';
import React from 'react';
import { StyledCard } from './Card.sc';

export interface CardProps {
    children: React.ReactNode;
    className?: string;
    elevation?: Elevation;
    hasBorderRadius?: boolean;
}

export const Card: React.FunctionComponent<CardProps> = ({
    children,
    className,
    elevation = Elevation.LEVEL_1,
    hasBorderRadius = true,
}) => (
    <StyledCard className={className} elevation={elevation} hasBorderRadius={hasBorderRadius}>
        {children}
    </StyledCard>
);

export default Card;
