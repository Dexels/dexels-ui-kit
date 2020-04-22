import { FunctionalWrapper, StyledPanelHeader, Title } from './PanelHeader.sc';
import { IconType, Status } from '../../../types';
import React, { FunctionComponent, ReactNode } from 'react';
import TextWithOptionalIcon from '../TextWithOptionalIcon/TextWithOptionalIcon';

export interface PanelHeaderProps {
    children?: never;
    hasCapitalizedTitle?: boolean;
    hasMarginBottom?: boolean;
    hasTitleStatusAppearance?: boolean;
    iconType?: IconType;
    options?: ReactNode;
    status?: Status;
    title: ReactNode;
}

export const PanelHeader: FunctionComponent<PanelHeaderProps> = ({
    hasCapitalizedTitle,
    hasMarginBottom = true,
    hasTitleStatusAppearance,
    iconType,
    options,
    status,
    title,
}) => (
    <StyledPanelHeader hasMarginBottom={hasMarginBottom}>
        <Title status={hasTitleStatusAppearance && status ? status : Status.DEFAULT}>
            <TextWithOptionalIcon iconType={iconType} isCapitalized={hasCapitalizedTitle}>
                {title}
            </TextWithOptionalIcon>
        </Title>
        <FunctionalWrapper>{options}</FunctionalWrapper>
    </StyledPanelHeader>
);

export default PanelHeader;
