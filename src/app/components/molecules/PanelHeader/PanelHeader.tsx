import {
    FunctionalWrapper,
    StyledPanelHeader,
    Title,
} from './PanelHeader.sc';
import { IconType } from '../../../types';
import React from 'react';
import TextWithOptionalIcon from '../TextWithOptionalIcon/TextWithOptionalIcon';

export interface PanelHeaderProps {
    iconType?: IconType;
    isTitleCapitalized?: boolean;
    options?: React.ReactNode;
    title: React.ReactNode;
}

export const PanelHeader: React.FunctionComponent<PanelHeaderProps> = ({
    iconType,
    isTitleCapitalized,
    options,
    title,
}) => (
    <StyledPanelHeader>
        <Title>
            <TextWithOptionalIcon iconType={iconType} isCapitalized={isTitleCapitalized}>
                {title}
            </TextWithOptionalIcon>
        </Title>
        <FunctionalWrapper>
            {options}
        </FunctionalWrapper>
    </StyledPanelHeader>
);

PanelHeader.defaultProps = {
    iconType: null,
    isTitleCapitalized: false,
    options: null,
};

export default PanelHeader;
