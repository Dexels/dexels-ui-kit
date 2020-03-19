import React, { FunctionComponent, ReactNode } from 'react';
import { Elevation } from '../../../types';
import { StyledCard } from './Card.sc';

export interface CardProps {
    children: ReactNode;
    className?: string;
    elevation?: Elevation;
    hasBorderRadius?: boolean;
}

export const Card: FunctionComponent<CardProps> = ({
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
