import { IconTypes, Statuses } from '../../../../types';
import { IconWrapper, StyledStatusCell } from './StatusCell.sc';
import Icon from '../../../atoms/Icon/Icon';
import { ICON_TYPES } from '../../../atoms/Icon/Icon.consts';
import { MATCH_TASK_STATUSES } from './StatusCell.consts';
import { MatchTaskStatuses } from './types';
import React from 'react';
import StatusIndicator from '../../../atoms/StatusIndicator/StatusIndicator';

const iconType = (matchTaskStatus: MatchTaskStatuses): IconTypes | null => {
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

interface StatusCellProps {
    matchTaskStatus: MatchTaskStatuses;
    status: Statuses;
}

const StatusCell: React.FunctionComponent<StatusCellProps> = ({ matchTaskStatus, status }) => (
    <StyledStatusCell>
        <StatusIndicator
            background="inherit"
            placement={StatusIndicator.placements.LEFT}
            size={StatusIndicator.sizes.LARGE}
            status={status}
        >
            <IconWrapper status={status}>
                <Icon type={iconType(matchTaskStatus)} />
            </IconWrapper>
        </StatusIndicator>
    </StyledStatusCell>
);

StatusCell.defaultProps = {
    matchTaskStatus: MATCH_TASK_STATUSES.SCHEDULED,
    status: StatusIndicator.statuses.DEFAULT,
};

export default StatusCell;
