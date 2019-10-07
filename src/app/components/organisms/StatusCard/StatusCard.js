import {
    STATUS_CARD_PLACEMENTS,
    STATUS_CARD_STATUSES,
} from './StatusCard.consts';
import { StyledStatusCard, StyledStatusCardWrapper } from './StatusCard.sc';
import Card from '../../molecules/Card/Card';
import PropTypes from 'prop-types';
import React from 'react';

const StatusCard = ({
    children,
    elevation,
    position,
    status,
    statusPlacement,
}) => (
    <StyledStatusCardWrapper
        elevation={elevation}
    >
        <StyledStatusCard
            status={status}
            statusPlacement={statusPlacement}
        >
            <Card
                elevation={Card.elevations.LEVEL_0}
                position={position}
            >
                {children}
            </Card>
        </StyledStatusCard>
    </StyledStatusCardWrapper>
);

StatusCard.elevations = Card.elevations;
StatusCard.positions = Card.positions;
StatusCard.statusPlacements = STATUS_CARD_PLACEMENTS;
StatusCard.statuses = STATUS_CARD_STATUSES;

StatusCard.propTypes = {
    children: PropTypes.node.isRequired,
    elevation: PropTypes.oneOf(Object.values(StatusCard.elevations)),
    position: PropTypes.oneOf(Object.values(StatusCard.positions)),
    status: PropTypes.oneOf(Object.values(StatusCard.statuses)),
    statusPlacement: PropTypes.oneOf(Object.values(StatusCard.statusPlacements)),
};

StatusCard.defaultProps = {
    elevation: Card.defaultProps.elevation,
    position: Card.defaultProps.position,
    status: StatusCard.statuses.DEFAULT,
    statusPlacement: StatusCard.statusPlacements.TOP,
};

export default StatusCard;
