import {
    FunctionalWrapper,
    StyledPanelHeader,
    Title,
} from './PanelHeader.sc';
import { IconType, Status } from '../../../types';
import React from 'react';
import TextWithOptionalIcon from '../TextWithOptionalIcon/TextWithOptionalIcon';

export interface PanelHeaderProps {
    hasCapitalizedTitle?: boolean;
    hasTitleStatusAppearance?: boolean;
    iconType?: IconType;
    options?: React.ReactNode;
    status?: Status;
    title: React.ReactNode;
}

export const PanelHeader: React.FunctionComponent<PanelHeaderProps> = ({
    hasCapitalizedTitle,
    hasTitleStatusAppearance,
    iconType,
    options,
    status,
    title,
}) => (
    <StyledPanelHeader>
        <Title status={hasTitleStatusAppearance ? status : undefined}>
            <TextWithOptionalIcon iconType={iconType} isCapitalized={hasCapitalizedTitle}>
                {title}
            </TextWithOptionalIcon>
        </Title>
        <FunctionalWrapper>
            {options}
        </FunctionalWrapper>
    </StyledPanelHeader>
);

export default PanelHeader;
