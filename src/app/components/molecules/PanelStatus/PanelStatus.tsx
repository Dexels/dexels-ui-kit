import { Elevation, Placement, Status } from '../../../types';
import PanelHeader, { PanelHeaderProps } from '../PanelHeader/PanelHeader';
import CardStatus from '../CardStatus/CardStatus';
import React from 'react';

export interface PanelStatusProps extends PanelHeaderProps {
    children: React.ReactNode;
    elevation?: Elevation;
    status?: Status;
}

export const PanelStatus: React.FunctionComponent<PanelStatusProps> = ({
    children,
    elevation,
    hasCapitalizedTitle,
    iconType,
    options,
    status,
    title,
}) => (
    <>
        <PanelHeader
            hasCapitalizedTitle={hasCapitalizedTitle}
            iconType={iconType}
            options={options}
            title={title}
        />
        <CardStatus elevation={elevation} placement={Placement.TOP} status={status}>
            {children}
        </CardStatus>
    </>
);

PanelStatus.defaultProps = {
    elevation: CardStatus.defaultProps.elevation,
    hasCapitalizedTitle: false,
    iconType: null,
    options: null,
    status: CardStatus.defaultProps.status,
};

export default PanelStatus;
