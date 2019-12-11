import { CARD_STATUS_PLACEMENTS, CARD_STATUS_STATUSES } from './CardStatus.consts';
import Card from '../../atoms/Card/Card';
import PropTypes from 'prop-types';
import React from 'react';
import StatusIndicator from '../../atoms/StatusIndicator/StatusIndicator';
import { StyledCardStatus } from './CardStatus.sc';

const CardStatus = ({
    children,
    elevation,
    hasBorderRadius,
    placement,
    status,
}) => (
    <StyledCardStatus
        elevation={elevation}
        hasBorderRadius={hasBorderRadius}
        placement={placement}
        size={StatusIndicator.sizes.SMALL}
        status={status}
    >
        {children}
    </StyledCardStatus>
);

CardStatus.elevations = Card.elevations;
CardStatus.placements = CARD_STATUS_PLACEMENTS;
CardStatus.statuses = CARD_STATUS_STATUSES;

CardStatus.propTypes = {
    children: PropTypes.node.isRequired,
    elevation: PropTypes.oneOf(Object.values(CardStatus.elevations)),
    hasBorderRadius: PropTypes.bool,
    placement: PropTypes.oneOf(Object.values(CardStatus.placements)),
    status: PropTypes.oneOf(Object.values(CardStatus.statuses)),
};

CardStatus.defaultProps = {
    elevation: Card.defaultProps.elevation,
    hasBorderRadius: false,
    placement: CardStatus.placements.TOP,
    status: CardStatus.statuses.DEFAULT,
};

export default CardStatus;
