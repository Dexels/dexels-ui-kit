import {
    STATUS_INDICATOR_PLACEMENTS,
    STATUS_INDICATOR_SIZES,
    STATUS_INDICATOR_STATUSES,
} from './StatusIndicator.consts';
import { StyledStatusIndicator, Text } from './StatusIndicator.sc';
import PropTypes from 'prop-types';
import React from 'react';

const StatusIndicator = ({
    as,
    children,
    placement,
    size,
    status,
}) => (
    <StyledStatusIndicator
        as={as}
        placement={placement}
        size={size}
        status={status}
    >
        <Text placement={placement}>
            {children}
        </Text>
    </StyledStatusIndicator>
);

StatusIndicator.placements = STATUS_INDICATOR_PLACEMENTS;
StatusIndicator.sizes = STATUS_INDICATOR_SIZES;
StatusIndicator.statuses = STATUS_INDICATOR_STATUSES;

StatusIndicator.propTypes = {
    as: PropTypes.string,
    children: PropTypes.node.isRequired,
    placement: PropTypes.oneOf(Object.values(StatusIndicator.placements)),
    size: PropTypes.oneOf(Object.values(StatusIndicator.sizes)),
    status: PropTypes.oneOf(Object.values(StatusIndicator.statuses)),
};

StatusIndicator.defaultProps = {
    as: 'div',
    placement: StatusIndicator.placements.TOP,
    size: StatusIndicator.statuses.LARGE,
    status: StatusIndicator.statuses.DEFAULT,
};

export default StatusIndicator;
