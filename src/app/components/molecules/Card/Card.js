import { CARD_ELEVATIONS, CARD_POSITIONS } from './Card.consts';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledCard } from './Card.sc';

const Card = ({
    children,
    elevation,
    height,
    position,
    width,
}) => (
    <StyledCard
        elevation={elevation}
        height={height}
        position={position}
        width={width}
    >
        {children}
    </StyledCard>
);

Card.elevations = CARD_ELEVATIONS;
Card.positions = CARD_POSITIONS;

Card.propTypes = {
    children: PropTypes.node.isRequired,
    elevation: PropTypes.oneOf(Object.values(Card.elevations)),
    height: PropTypes.string,
    position: PropTypes.oneOf(Object.values(Card.positions)),
    width: PropTypes.string,
};

Card.defaultProps = {
    elevation: Card.elevations.LEVEL_1,
    height: '100%',
    position: Card.positions.TOP_LEFT,
    width: '100%',
};

export default Card;
