import { CARD_STATUS_PLACEMENTS, CARD_STATUS_STATUSES } from './CardStatus.consts';
import Card from '../../atoms/Card/Card';
import PropTypes from 'prop-types';
import React from 'react';
import StatusIndicator from '../../atoms/StatusIndicator/StatusIndicator';
import { StyledCardStatusWrapper } from './CardStatus.sc';

const CardStatus = ({
    children,
    elevation,
    placement,
    position,
    status,
}) => (
    <StyledCardStatusWrapper elevation={elevation}>
        <StatusIndicator placement={placement} status={status}>
            <Card elevation={Card.elevations.LEVEL_0} position={position}>
                {children}
            </Card>
        </StatusIndicator>
    </StyledCardStatusWrapper>
);

CardStatus.elevations = Card.elevations;
CardStatus.positions = Card.positions;
CardStatus.placements = CARD_STATUS_PLACEMENTS;
CardStatus.statuses = CARD_STATUS_STATUSES;

CardStatus.propTypes = {
    children: PropTypes.node.isRequired,
    elevation: PropTypes.oneOf(Object.values(CardStatus.elevations)),
    placement: PropTypes.oneOf(Object.values(CardStatus.placements)),
    position: PropTypes.oneOf(Object.values(CardStatus.positions)),
    status: PropTypes.oneOf(Object.values(CardStatus.statuses)),
};

CardStatus.defaultProps = {
    elevation: Card.defaultProps.elevation,
    placement: CardStatus.placements.TOP,
    position: Card.defaultProps.position,
    status: CardStatus.statuses.DEFAULT,
};

export default CardStatus;
