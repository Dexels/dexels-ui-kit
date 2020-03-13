import {
    FunctionalWrapper,
    StyledPanelHeader,
    Title,
} from './PanelHeader.sc';
import { IconType } from '../../../types';
import React from 'react';
import TextWithOptionalIcon from '../TextWithOptionalIcon/TextWithOptionalIcon';

export interface PanelHeaderProps {
    hasCapitalizedTitle?: boolean;
    iconType?: IconType;
    options?: React.ReactNode;
    title: React.ReactNode;
}

export const PanelHeader: React.FunctionComponent<PanelHeaderProps> = ({
    hasCapitalizedTitle,
    iconType,
    options,
    title,
}) => (
    <StyledPanelHeader>
        <Title>
            <TextWithOptionalIcon iconType={iconType} isCapitalized={hasCapitalizedTitle}>
                {title}
            </TextWithOptionalIcon>
        </Title>
        <FunctionalWrapper>
            {options}
        </FunctionalWrapper>
    </StyledPanelHeader>
);

PanelHeader.defaultProps = {
    hasCapitalizedTitle: false,
    iconType: null,
    options: null,
};

export default PanelHeader;
