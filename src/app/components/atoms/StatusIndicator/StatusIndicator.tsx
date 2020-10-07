import { Placement, Status, StatusIndicatorSize } from '../../../types';
import React, { ComponentType, FunctionComponent, ReactNode } from 'react';
import { StyledStatusIndicator } from './StatusIndicator.sc';

export interface StatusIndicatorProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    as?: keyof JSX.IntrinsicElements | ComponentType<any>;
    background?: string;
    children?: ReactNode;
    className?: string;
    placement?: Placement;
    size?: StatusIndicatorSize;
    status: Status;
    tooltipText?: string;
}

export const StatusIndicator: FunctionComponent<StatusIndicatorProps> = ({
    as = 'div',
    background,
    children,
    className,
    placement,
    size,
    status,
    tooltipText,
}) => (
    <StyledStatusIndicator
        as={as}
        background={background}
        className={className}
        data-tooltip-component={tooltipText || null}
        placement={placement}
        size={size}
        status={status}
    >
        {children}
    </StyledStatusIndicator>
);

export default StatusIndicator;
