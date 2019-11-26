import { CARD_STATUS_PLACEMENTS, CARD_STATUS_STATUSES } from './CardStatus.consts';
import Card from '../../atoms/Card/Card';
import PropTypes from 'prop-types';
import React from 'react';
import StatusIndicator from '../../atoms/StatusIndicator/StatusIndicator';
import { StyledCardStatusWrapper } from './CardStatus.sc';

const CardStatus = ({
    children,
    elevation,
    hasBorderRadius,
    placement,
    position,
    status,
}) => (
    <StyledCardStatusWrapper elevation={elevation} hasBorderRadius={hasBorderRadius}>
        <StatusIndicator placement={placement} status={status}>
            <Card elevation={Card.elevations.LEVEL_0} hasBorderRadius={false} position={position}>
                {children}
            </Card>
        </StatusIndicator>
    </StyledCardStatusWrapper>
);

CardStatus.elevations = Card.elevations;
CardStatus.placements = CARD_STATUS_PLACEMENTS;
CardStatus.positions = Card.positions;
CardStatus.statuses = CARD_STATUS_STATUSES;

CardStatus.propTypes = {
    children: PropTypes.node.isRequired,
    elevation: PropTypes.oneOf(Object.values(CardStatus.elevations)),
    hasBorderRadius: PropTypes.bool,
    placement: PropTypes.oneOf(Object.values(CardStatus.placements)),
    position: PropTypes.oneOf(Object.values(CardStatus.positions)),
    status: PropTypes.oneOf(Object.values(CardStatus.statuses)),
};

CardStatus.defaultProps = {
    elevation: Card.defaultProps.elevation,
    hasBorderRadius: false,
    placement: CardStatus.placements.TOP,
    position: Card.defaultProps.position,
    status: CardStatus.statuses.DEFAULT,
};

export default CardStatus;
