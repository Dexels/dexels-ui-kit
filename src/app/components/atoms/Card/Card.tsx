import React, { FunctionComponent, ReactNode } from 'react';
import { Elevation } from '../../../types';
import { StyledCard } from './Card.sc';

export interface CardProps {
    children?: ReactNode;
    className?: string;
    elevation?: Elevation;
    hasBorderRadius?: boolean;
    hasFullheightContent?: boolean;
}

export const Card: FunctionComponent<CardProps> = ({
    children,
    className,
    elevation = Elevation.LEVEL_1,
    hasBorderRadius = false,
    hasFullheightContent = false,
}) => (
    <StyledCard
        className={className}
        elevation={elevation}
        hasBorderRadius={hasBorderRadius}
        hasFullheightContent={hasFullheightContent}
    >
        {children}
    </StyledCard>
);

export default Card;
