import { Elevation, Placement, Status } from '../../../types';
import PanelHeader, { PanelHeaderProps } from '../PanelHeader/PanelHeader';
import React, { FunctionComponent, ReactNode } from 'react';
import CardStatus from '../CardStatus/CardStatus';

export interface PanelStatusProps extends Omit<PanelHeaderProps, 'children'> {
    children?: ReactNode;
    elevation?: Elevation;
    status?: Status;
}

export const PanelStatus: FunctionComponent<PanelStatusProps> = ({
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
