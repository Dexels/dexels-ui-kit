import { CARD_ELEVATIONS, CARD_POSITIONS } from './Card.consts';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledCard } from './Card.sc';

const Card = ({
    children,
    elevation,
    hasBorderRadius,
    position,
}) => (
    <StyledCard elevation={elevation} hasBorderRadius={hasBorderRadius} position={position}>
        {children}
    </StyledCard>
);

Card.elevations = CARD_ELEVATIONS;
Card.positions = CARD_POSITIONS;

Card.propTypes = {
    children: PropTypes.node.isRequired,
    elevation: PropTypes.oneOf(Object.values(Card.elevations)),
    hasBorderRadius: PropTypes.bool,
    position: PropTypes.oneOf(Object.values(Card.positions)),
};

Card.defaultProps = {
    elevation: Card.elevations.LEVEL_1,
    hasBorderRadius: true,
    position: Card.positions.TOP_LEFT,
};

export default Card;
