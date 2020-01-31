import { Placement, Status, StatusIndicatorSize } from '../../../types';
import React from 'react';
import { StyledStatusIndicator } from './StatusIndicator.sc';

export interface StatusIndicatorProps {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
    background?: string;
    className?: string;
    placement?: Placement;
    size?: StatusIndicatorSize;
    status?: Status;
}

export const StatusIndicator: React.FunctionComponent<StatusIndicatorProps> = ({
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

StatusIndicator.defaultProps = {
    as: 'div',
    background: undefined,
    className: '',
    placement: Placement.TOP,
    size: StatusIndicatorSize.LARGE,
    status: Status.DEFAULT,
};

export default StatusIndicator;
