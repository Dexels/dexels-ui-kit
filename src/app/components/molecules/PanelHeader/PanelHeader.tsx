import {
    FunctionalWrapper,
    StyledPanelHeader,
    Title,
} from './PanelHeader.sc';
import { IconType, Status } from '../../../types';
import React from 'react';
import TextWithOptionalIcon from '../TextWithOptionalIcon/TextWithOptionalIcon';

export interface PanelHeaderProps {
    hasTitleStatusAppearance?: boolean;
    iconType?: IconType;
    isTitleCapitalized?: boolean;
    options?: React.ReactNode;
    status?: Status;
    title: React.ReactNode;
}

export const PanelHeader: React.FunctionComponent<PanelHeaderProps> = ({
    hasTitleStatusAppearance,
    iconType,
    isTitleCapitalized,
    options,
    status,
    title,
}) => (
    <StyledPanelHeader>
        <Title status={hasTitleStatusAppearance ? status : undefined}>
            <TextWithOptionalIcon iconType={iconType} isCapitalized={isTitleCapitalized}>
                {title}
            </TextWithOptionalIcon>
        </Title>
        <FunctionalWrapper>
            {options}
        </FunctionalWrapper>
    </StyledPanelHeader>
);

export default PanelHeader;
