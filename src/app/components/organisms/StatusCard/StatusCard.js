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
    height,
    position,
    status,
    statusPlacement,
    width,
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
                height={height}
                position={position}
                width={width}
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
    height: PropTypes.string,
    position: PropTypes.oneOf(Object.values(StatusCard.positions)),
    status: PropTypes.oneOf(Object.values(StatusCard.statuses)),
    statusPlacement: PropTypes.oneOf(Object.values(StatusCard.statusPlacements)),
    width: PropTypes.string,
};

StatusCard.defaultProps = {
    elevation: Card.defaultProps.elevation,
    height: Card.defaultProps.height,
    position: Card.defaultProps.position,
    status: StatusCard.statuses.DEFAULT,
    statusPlacement: StatusCard.statusPlacements.TOP,
    width: Card.defaultProps.width,
};

export default StatusCard;
