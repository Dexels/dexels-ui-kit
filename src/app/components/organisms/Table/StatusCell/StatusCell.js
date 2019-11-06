import { IconWrapper, StyledStatusCell } from './StatusCell.sc';
import Icon from '../../../atoms/Icon/Icon';
import { ICON_TYPES } from '../../../atoms/Icon/Icon.consts';
import { MATCH_TASK_STATUSES } from './StatusCell.consts';
import PropTypes from 'prop-types';
import React from 'react';
import StatusIndicator from '../../../atoms/StatusIndicator/StatusIndicator';

const iconType = (matchTaskStatus) => {
    switch (matchTaskStatus) {
        case MATCH_TASK_STATUSES.NO_DRESSINGROOMS:
            return ICON_TYPES.STATUSALERT;

        case MATCH_TASK_STATUSES.NO_FIELD:
            return ICON_TYPES.STATUSALERT;

        case MATCH_TASK_STATUSES.NO_OFFICIALS:
            return ICON_TYPES.STATUSALERT;

        case MATCH_TASK_STATUSES.NONE:
            return ICON_TYPES.STATUSDONE;

        default:
            return null;
    }
};

const StatusCell = ({ matchTaskStatus, status }) => (
    <StyledStatusCell>
        <StatusIndicator placement={StatusIndicator.placements.LEFT} status={status}>
            <IconWrapper status={status}>
                <Icon type={iconType(matchTaskStatus)} />
            </IconWrapper>
        </StatusIndicator>
    </StyledStatusCell>
);

StatusCell.propTypes = {
    matchTaskStatus: PropTypes.oneOf(Object.values(MATCH_TASK_STATUSES)),
    status: PropTypes.oneOf(Object.values(StatusIndicator.statuses)),
};

StatusCell.defaultProps = {
    matchTaskStatus: MATCH_TASK_STATUSES.SCHEDLUED,
    status: StatusIndicator.statuses.DEFAULT,
};

export default StatusCell;
