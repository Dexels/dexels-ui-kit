import { STATUS_INDICATOR_PLACEMENTS, STATUS_INDICATOR_STATUSES } from './StatusIndicator.consts';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledStatusIndicator } from './StatusIndicator.sc';

const StatusIndicator = ({
    children,
    size,
    status,
    statusPlacement,
}) => (
    <StyledStatusIndicator
        size={size}
        status={status}
        statusPlacement={statusPlacement}
    >
        {children}
    </StyledStatusIndicator>
);

StatusIndicator.statuses = STATUS_INDICATOR_STATUSES;
StatusIndicator.statusPlacements = STATUS_INDICATOR_PLACEMENTS;

StatusIndicator.propTypes = {
    children: PropTypes.node.isRequired,
    size: PropTypes.string,
    status: PropTypes.oneOf(Object.values(StatusIndicator.statuses)),
    statusPlacement: PropTypes.oneOf(Object.values(StatusIndicator.statusPlacements)),
};

StatusIndicator.defaultProps = {
    size: '8px',
    status: StatusIndicator.statuses.DEFAULT,
    statusPlacement: StatusIndicator.statusPlacements.LEFT,
};

export default StatusIndicator;
