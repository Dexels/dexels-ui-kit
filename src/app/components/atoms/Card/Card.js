import { CARD_ELEVATIONS } from './Card.consts';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledCard } from './Card.sc';

const Card = ({
    children,
    elevation,
    hasBorderRadius,
}) => (
    <StyledCard elevation={elevation} hasBorderRadius={hasBorderRadius}>
        {children}
    </StyledCard>
);

Card.elevations = CARD_ELEVATIONS;

Card.propTypes = {
    children: PropTypes.node.isRequired,
    elevation: PropTypes.oneOf(Object.values(Card.elevations)),
    hasBorderRadius: PropTypes.bool,
};

Card.defaultProps = {
    elevation: Card.elevations.LEVEL_1,
    hasBorderRadius: true,
};

export default Card;
