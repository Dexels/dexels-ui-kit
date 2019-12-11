import { CARD_ELEVATIONS } from './Card.consts';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledCard } from './Card.sc';

const Card = ({
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

Card.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    elevation: PropTypes.oneOf(Object.values(Card.elevations)),
    hasBorderRadius: PropTypes.bool,
};

Card.defaultProps = {
    className: '',
    elevation: Card.elevations.LEVEL_1,
    hasBorderRadius: true,
};

export default Card;
