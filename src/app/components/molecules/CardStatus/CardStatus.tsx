import { Placement, Status } from '../../../types';
import React, { FunctionComponent } from 'react';
import { CardProps } from '../../atoms/Card/Card';
import { StyledCardStatus } from './CardStatus.sc';

export interface CardStatusProps extends CardProps {
    placement?: Placement;
    status?: Status;
}

export const CardStatus: FunctionComponent<CardStatusProps> = ({
    children,
    className,
    elevation,
    hasBorderRadius,
    hasFullheightContent,
    placement = Placement.TOP,
    status = Status.DEFAULT,
}) => (
    <StyledCardStatus
        className={className}
        elevation={elevation}
        hasBorderRadius={hasBorderRadius}
        hasFullheightContent={hasFullheightContent}
        placement={placement}
        status={status}
    >
        {children}
    </StyledCardStatus>
);

export default CardStatus;
