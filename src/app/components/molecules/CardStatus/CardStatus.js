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
    status,
}) => (
    <StyledCardStatusWrapper elevation={elevation} hasBorderRadius={hasBorderRadius}>
        <StatusIndicator placement={placement} size={StatusIndicator.sizes.SMALL} status={status}>
            <Card elevation={Card.elevations.LEVEL_0} hasBorderRadius={false}>
                {children}
            </Card>
        </StatusIndicator>
    </StyledCardStatusWrapper>
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
