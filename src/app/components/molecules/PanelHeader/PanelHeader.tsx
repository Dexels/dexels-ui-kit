import { FunctionalWrapper, StyledPanelHeader, Title } from './PanelHeader.sc';
import { IconType, Status } from '../../../types';
import React, { FunctionComponent, ReactNode } from 'react';
import TextWithOptionalIcon from '../TextWithOptionalIcon/TextWithOptionalIcon';

export interface PanelHeaderProps {
    children?: never;
    hasCapitalizedTitle?: boolean;
    hasTitleStatusAppearance?: boolean;
    iconType?: IconType;
    options?: ReactNode;
    status?: Status;
    title: ReactNode;
}

export const PanelHeader: FunctionComponent<PanelHeaderProps> = ({
    hasCapitalizedTitle,
    hasTitleStatusAppearance,
    iconType,
    options,
    status,
    title,
}) => (
    <StyledPanelHeader>
        <Title status={hasTitleStatusAppearance && status ? status : Status.DEFAULT}>
            <TextWithOptionalIcon iconType={iconType} isCapitalized={hasCapitalizedTitle}>
                {title}
            </TextWithOptionalIcon>
        </Title>
        <FunctionalWrapper>{options}</FunctionalWrapper>
    </StyledPanelHeader>
);

export default PanelHeader;
