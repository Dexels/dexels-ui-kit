import { Placement, Status, StatusIndicatorSize } from '../../../types';
import React from 'react';
import { StyledStatusIndicator } from './StatusIndicator.sc';

export interface StatusIndicatorProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
    background?: string;
    className?: string;
    placement?: Placement;
    size?: StatusIndicatorSize;
    status?: Status;
}

export const StatusIndicator: React.FunctionComponent<StatusIndicatorProps> = ({
    as = 'div',
    background,
    children,
    className,
    placement = Placement.TOP,
    size = StatusIndicatorSize.LARGE,
    status = Status.DEFAULT,
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

export default StatusIndicator;
