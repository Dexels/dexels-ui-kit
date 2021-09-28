import { FunctionalWrapper, LoaderWrapper, StyledPanelHeader, Title } from './PanelHeader.sc';
import { IconType, Status } from '../../../types';
import React, { FunctionComponent, ReactNode } from 'react';
import Skeleton from '../Skeleton/Skeleton';
import TextWithOptionalIcon from '../TextWithOptionalIcon/TextWithOptionalIcon';

export interface PanelHeaderProps {
    children?: never;
    hasCapitalizedTitle?: boolean;
    hasMarginBottom?: boolean;
    hasTitleStatusAppearance?: boolean;
    iconType?: IconType;
    isDisabled?: boolean;
    isLoading?: boolean;
    isReversed?: boolean;
    options?: ReactNode;
    status?: Status;
    title: ReactNode;
}

export const PanelHeader: FunctionComponent<PanelHeaderProps> = ({
    hasCapitalizedTitle,
    hasMarginBottom = true,
    hasTitleStatusAppearance,
    iconType,
    isDisabled = false,
    isLoading = false,
    isReversed = false,
    options,
    status,
    title,
}) =>
    isLoading ? (
        <LoaderWrapper hasMarginBottom={hasMarginBottom}>
            <Skeleton />
        </LoaderWrapper>
    ) : (
        <StyledPanelHeader hasMarginBottom={hasMarginBottom}>
            {isReversed && <FunctionalWrapper isReversed={isReversed}>{options}</FunctionalWrapper>}

            <Title isReversed={isReversed} status={hasTitleStatusAppearance && status ? status : Status.DEFAULT}>
                <TextWithOptionalIcon iconType={iconType} isCapitalized={hasCapitalizedTitle} isDisabled={isDisabled}>
                    {title}
                </TextWithOptionalIcon>
            </Title>
            {!isReversed && <FunctionalWrapper isReversed={isReversed}>{options}</FunctionalWrapper>}
        </StyledPanelHeader>
    );

export default PanelHeader;
