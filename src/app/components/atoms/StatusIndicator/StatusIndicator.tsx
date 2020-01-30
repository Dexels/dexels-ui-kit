import {
    Placements,
    PlacementsMap,
    Statuses,
    StatusesMap,
} from '../../../types';
import {
    STATUS_INDICATOR_PLACEMENTS,
    STATUS_INDICATOR_SIZES,
    STATUS_INDICATOR_STATUSES,
} from './StatusIndicator.consts';
import React from 'react';
import { StyledStatusIndicator } from './StatusIndicator.sc';

export interface StatusIndicatorProps {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
    background?: string;
    className?: string;
    placement?: Placements;
    size?: 'LARGE' | 'SMALL';
    status?: Statuses;
}

interface StatusIndicatorComponent extends React.FunctionComponent<StatusIndicatorProps> {
    placements: PlacementsMap;
    sizes: {
        [Size in StatusIndicatorProps['size']]: Size;
    };
    statuses: StatusesMap;
}

export const StatusIndicator: StatusIndicatorComponent = ({
    as,
    background,
    children,
    className,
    placement,
    size,
    status,
}) => (
    <StyledStatusIndicator
        as={as}
        background={background}
        className={className}
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

StatusIndicator.defaultProps = {
    as: 'div',
    background: undefined,
    className: '',
    placement: StatusIndicator.placements.TOP,
    size: StatusIndicator.sizes.LARGE,
    status: StatusIndicator.statuses.DEFAULT,
};

export default StatusIndicator;
