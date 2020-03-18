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
    hasTitleStatusAppearance,
    iconType,
    options,
    status,
    title,
}) => (
    <>
        <PanelHeader
            hasCapitalizedTitle={hasCapitalizedTitle}
            hasTitleStatusAppearance={hasTitleStatusAppearance}
            iconType={iconType}
            options={options}
            status={status}
            title={title}
        />
        <CardStatus elevation={elevation} placement={Placement.TOP} status={status}>
            {children}
        </CardStatus>
    </>
);

export default PanelStatus;
