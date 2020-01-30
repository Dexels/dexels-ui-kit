import {
    Elevations,
    ElevationsMap,
    IconTypes,
    IconTypesMap,
    Statuses,
    StatusesMap,
} from '../../../types';
import {
    FunctionalWrapper,
    StyledHeader,
    Title,
} from './PanelStatus.sc';
import CardStatus from '../CardStatus/CardStatus';
import { PANEL_STATUS_ICON_TYPES } from './PanelStatus.consts';
import React from 'react';
import TextWithOptionalIcon from '../TextWithOptionalIcon/TextWithOptionalIcon';

export interface PanelStatusProps {
    children: React.ReactNode;
    elevation?: Elevations;
    iconType?: IconTypes;
    options?: React.ReactNode;
    status?: Statuses;
    title: React.ReactNode;
}

interface PanelStatusComponent extends React.FunctionComponent<PanelStatusProps> {
    elevations: ElevationsMap;
    iconTypes: IconTypesMap;
    statuses: StatusesMap;
}

export const PanelStatus: PanelStatusComponent = ({
    children,
    elevation,
    iconType,
    options,
    status,
    title,
}) => (
    <>
        <StyledHeader>
            <Title>
                <TextWithOptionalIcon iconType={iconType}>
                    {title}
                </TextWithOptionalIcon>
            </Title>
            <FunctionalWrapper>
                {options}
            </FunctionalWrapper>
        </StyledHeader>
        <CardStatus elevation={elevation} placement={CardStatus.placements.TOP} status={status}>
            {children}
        </CardStatus>
    </>
);

PanelStatus.elevations = CardStatus.elevations;
PanelStatus.iconTypes = PANEL_STATUS_ICON_TYPES;
PanelStatus.statuses = CardStatus.statuses;

PanelStatus.defaultProps = {
    elevation: CardStatus.defaultProps.elevation,
    iconType: null,
    options: null,
    status: CardStatus.defaultProps.status,
};

export default PanelStatus;
