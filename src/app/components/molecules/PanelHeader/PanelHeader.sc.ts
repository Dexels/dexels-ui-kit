import styled, { css, SimpleInterpolation } from 'styled-components';
import { getStatusColor } from '../../../styles/mixins/getStatusColor';
import { Status } from '../../../types';
import { themeBasic } from '../../../styles/theming/themes/basic';

interface StyledPanelHeaderProps {
    hasMarginBottom: boolean;
}

export const StyledPanelHeader = styled.div<StyledPanelHeaderProps>`
    display: flex;
    align-items: center;

    ${({ hasMarginBottom, theme }): SimpleInterpolation =>
        hasMarginBottom &&
        css`
            margin: ${theme.spacing(0, 0, 1, 0)};
        `}
`;

StyledPanelHeader.defaultProps = {
    theme: themeBasic,
};

interface TitleProps {
    isReversed: boolean;
    status: Status;
}

export const Title = styled.div<TitleProps>`
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().h1)}
    color: ${({ status, theme }): string => getStatusColor(status, theme)};

    ${({ isReversed }): SimpleInterpolation =>
        isReversed &&
        css`
            margin: 0 0 0 auto;
        `}
`;

Title.defaultProps = {
    theme: themeBasic,
};

interface FunctionalWrapperProps {
    isReversed: boolean;
}

export const FunctionalWrapper = styled.div<FunctionalWrapperProps>`
    ${({ isReversed }): SimpleInterpolation =>
        !isReversed &&
        css`
            margin: 0 0 0 auto;
        `}
`;
