import { CARD_STATUS_PLACEMENTS, CARD_STATUS_STATUSES } from './CardStatus.consts';
import { StyledCardStatus, StyledCardStatusWrapper } from './CardStatus.sc';
import Card from '../../molecules/Card/Card';
import PropTypes from 'prop-types';
import React from 'react';

const CardStatus = ({
    children,
    elevation,
    position,
    status,
    statusPlacement,
}) => (
    <StyledCardStatusWrapper elevation={elevation}>
        <StyledCardStatus status={status} statusPlacement={statusPlacement}>
            <Card elevation={Card.elevations.LEVEL_0} position={position}>
                {children}
            </Card>
        </StyledCardStatus>
    </StyledCardStatusWrapper>
);

CardStatus.elevations = Card.elevations;
CardStatus.positions = Card.positions;
CardStatus.statusPlacements = CARD_STATUS_PLACEMENTS;
CardStatus.statuses = CARD_STATUS_STATUSES;

CardStatus.propTypes = {
    children: PropTypes.node.isRequired,
    elevation: PropTypes.oneOf(Object.values(CardStatus.elevations)),
    position: PropTypes.oneOf(Object.values(CardStatus.positions)),
    status: PropTypes.oneOf(Object.values(CardStatus.statuses)),
    statusPlacement: PropTypes.oneOf(Object.values(CardStatus.statusPlacements)),
};

CardStatus.defaultProps = {
    elevation: Card.defaultProps.elevation,
    position: Card.defaultProps.position,
    status: CardStatus.statuses.DEFAULT,
    statusPlacement: CardStatus.statusPlacements.TOP,
};

export default CardStatus;
