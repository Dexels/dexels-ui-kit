import {
    Elevation,
    IconType,
    Placement,
    Status,
} from '../../../types';
import {
    FunctionalWrapper,
    StyledHeader,
    Title,
} from './PanelStatus.sc';
import CardStatus from '../CardStatus/CardStatus';
import React from 'react';
import TextWithOptionalIcon from '../TextWithOptionalIcon/TextWithOptionalIcon';

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
