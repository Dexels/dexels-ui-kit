import { IconType, Placement, Status, StatusIndicatorSize } from '../../../../../types';
import { IconWrapper, StyledStatusCell } from './StatusCell.sc';
import React, { FunctionComponent } from 'react';
import Icon from '../../../../atoms/Icon/Icon';
import { MatchTaskStatuses } from './types';
import { StatusIndicator } from '../../../../atoms/StatusIndicator/StatusIndicator';

// If you ever want to use this organism in another project please make sure the MatchTaskStatuses type is up to date
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
    children?: never;
    matchTaskStatus: MatchTaskStatuses;
    status: Status;
}

const StatusCell: FunctionComponent<StatusCellProps> = ({ matchTaskStatus, status }) => (
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
