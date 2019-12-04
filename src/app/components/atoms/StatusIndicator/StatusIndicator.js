import {
    STATUS_INDICATOR_PLACEMENTS,
    STATUS_INDICATOR_SIZES,
    STATUS_INDICATOR_STATUSES,
} from './StatusIndicator.consts';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledStatusIndicator } from './StatusIndicator.sc';

const StatusIndicator = ({
    as,
    background,
    children,
    placement,
    size,
    status,
}) => (
    <StyledStatusIndicator
        as={as}
        background={background}
        placement={placement}
        size={size}
        status={status}
    >
        {children}
    </StyledStatusIndicator>
);

StatusIndicator.placements = STATUS_INDICATOR_PLACEMENTS;
StatusIndicator.sizes = STATUS_INDICATOR_SIZES;
StatusIndicator.statuses = STATUS_INDICATOR_STATUSES;

StatusIndicator.propTypes = {
    as: PropTypes.string,
    background: PropTypes.string,
    children: PropTypes.node.isRequired,
    placement: PropTypes.oneOf(Object.values(StatusIndicator.placements)),
    size: PropTypes.oneOf(Object.values(StatusIndicator.sizes)),
    status: PropTypes.oneOf(Object.values(StatusIndicator.statuses)),
};

StatusIndicator.defaultProps = {
    as: 'div',
    background: undefined,
    placement: StatusIndicator.placements.TOP,
    size: StatusIndicator.sizes.LARGE,
    status: StatusIndicator.statuses.DEFAULT,
};

export default StatusIndicator;
