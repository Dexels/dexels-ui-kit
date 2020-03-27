import CardStatus, { CardStatusProps } from '../CardStatus/CardStatus';
import PanelHeader, { PanelHeaderProps } from '../PanelHeader/PanelHeader';
import React, { FunctionComponent } from 'react';
import { Placement } from '../../../types';

export interface PanelStatusProps
    extends Omit<CardStatusProps, 'className' | 'placement'>,
        Omit<PanelHeaderProps, 'children'> {}

export const PanelStatus: FunctionComponent<PanelStatusProps> = ({
    children,
    elevation,
    hasBorderRadius,
    hasCapitalizedTitle,
    hasFullheightContent,
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
        <CardStatus
            elevation={elevation}
            hasBorderRadius={hasBorderRadius}
            hasFullheightContent={hasFullheightContent}
            placement={Placement.TOP}
            status={status}
        >
            {children}
        </CardStatus>
    </>
);

export default PanelStatus;
