import { STATUS_INDICATOR_PLACEMENTS, STATUS_INDICATOR_STATUSES } from './StatusIndicator.consts';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledStatusIndicator } from './StatusIndicator.sc';

const StatusIndicator = ({
    as,
    children,
    placement,
    status,
}) => (
    <StyledStatusIndicator as={as} placement={placement} status={status}>
        {children}
    </StyledStatusIndicator>
);

StatusIndicator.placements = STATUS_INDICATOR_PLACEMENTS;
StatusIndicator.statuses = STATUS_INDICATOR_STATUSES;

StatusIndicator.propTypes = {
    as: PropTypes.string,
    children: PropTypes.node.isRequired,
    placement: PropTypes.oneOf(Object.values(StatusIndicator.placements)),
    status: PropTypes.oneOf(Object.values(StatusIndicator.statuses)),
};

StatusIndicator.defaultProps = {
    as: 'div',
    placement: StatusIndicator.placements.TOP,
    status: StatusIndicator.statuses.DEFAULT,
};

export default StatusIndicator;
