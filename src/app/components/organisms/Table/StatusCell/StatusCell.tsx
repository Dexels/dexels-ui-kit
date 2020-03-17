import {
    IconType,
    Placement,
    Status,
    StatusIndicatorSize,
} from '../../../../types';
import { IconWrapper, StyledStatusCell } from './StatusCell.sc';
import Icon from '../../../atoms/Icon/Icon';
import { MatchTaskStatuses } from './types';
import React from 'react';
import { StatusIndicator } from '../../../atoms/StatusIndicator/StatusIndicator';

const iconType = (matchTaskStatus: MatchTaskStatuses): IconType => {
    switch (matchTaskStatus) {
        case MatchTaskStatuses.NO_DRESSINGROOMS:
            return IconType.STATUSALERT;

        case MatchTaskStatuses.NO_FIELD:
            return IconType.STATUSALERT;

        case MatchTaskStatuses.NO_OFFICIALS:
            return IconType.STATUSALERT;

        case MatchTaskStatuses.NONE:
            return IconType.STATUSDONE;

        default:
            return IconType.STATUSDONE;
    }
};

interface StatusCellProps {
    matchTaskStatus: MatchTaskStatuses;
    status: Status;
}

const StatusCell: React.FunctionComponent<StatusCellProps> = ({ matchTaskStatus, status }) => (
    <StyledStatusCell>
        <StatusIndicator
            background="inherit"
            placement={Placement.LEFT}
            size={StatusIndicatorSize.LARGE}
            status={status}
        >
            <IconWrapper status={status}>
                <Icon type={iconType(matchTaskStatus)} />
            </IconWrapper>
        </StatusIndicator>
    </StyledStatusCell>
);

export default StatusCell;
