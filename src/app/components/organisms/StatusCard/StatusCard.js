import {
    STATUS_CARD_PLACEMENTS,
    STATUS_CARD_STATUSES,
} from './StatusCard.consts';
import Card from '../../molecules/Card/Card';
import PropTypes from 'prop-types';
import React from 'react';
import StatusIndicator from '../../molecules/StatusIndicator/StatusIndicator';

const StatusCard = ({
    children,
    elevation,
    height,
    position,
    status,
    statusPlacement,
    width,
}) => (
    <Card
        elevation={elevation}
        height={height}
        position={position}
        width={width}
    >
        <StatusIndicator
            status={status}
            statusPlacement={statusPlacement}
        >
            {children}
        </StatusIndicator>
    </Card>
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
    status: Card.defaultProps.status,
    statusPlacement: Card.defaultProps.statusPlacement,
    width: Card.defaultProps.width,
};

export default StatusCard;
