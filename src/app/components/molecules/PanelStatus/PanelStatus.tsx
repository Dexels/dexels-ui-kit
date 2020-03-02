import {
    Elevation,
    IconType,
    Placement,
    Status,
} from '../../../types';
import CardStatus from '../CardStatus/CardStatus';
import PanelHeader from '../PanelHeader/PanelHeader';
import React from 'react';

export interface PanelStatusProps {
    children: React.ReactNode;
    elevation?: Elevation;
    iconType?: IconType;
    options?: React.ReactNode;
    status?: Status;
    title: React.ReactNode;
}

export const PanelStatus: React.FunctionComponent<PanelStatusProps> = ({
    children,
    elevation,
    iconType,
    options,
    status,
    title,
}) => (
    <>
        <PanelHeader iconType={iconType} options={options} title={title} />
        <CardStatus elevation={elevation} placement={Placement.TOP} status={status}>
            {children}
        </CardStatus>
    </>
);

PanelStatus.defaultProps = {
    elevation: CardStatus.defaultProps.elevation,
    iconType: null,
    options: null,
    status: CardStatus.defaultProps.status,
};

export default PanelStatus;
