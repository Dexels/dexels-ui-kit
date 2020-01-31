import { Elevation } from '../../../types';
import React from 'react';
import { StyledCard } from './Card.sc';

export interface CardProps {
    className?: string;
    elevation?: Elevation;
    hasBorderRadius?: boolean;
}

export const Card: React.FunctionComponent<CardProps> = ({
    children,
    className,
    elevation,
    hasBorderRadius,
}) => (
    <StyledCard className={className} elevation={elevation} hasBorderRadius={hasBorderRadius}>
        {children}
    </StyledCard>
);

Card.defaultProps = {
    className: '',
    elevation: Elevation.LEVEL_1,
    hasBorderRadius: true,
};

export default Card;
