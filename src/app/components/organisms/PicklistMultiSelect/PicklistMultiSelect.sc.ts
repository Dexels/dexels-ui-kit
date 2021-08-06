import styled, { css, SimpleInterpolation } from 'styled-components';
import { setBoxSizing } from '../../../styles/mixins/setBoxSizing';
import { themeBasic } from '../../../styles/theming/themes/basic';

interface StyledWrapperProps {
    isDisabled: boolean;
}

export const StyledWrapper = styled.div<StyledWrapperProps>`
    ${setBoxSizing()}
    display: flex;
    background-color: ${({ theme }): string => theme.background.secondary};
`;

StyledWrapper.defaultProps = {
    theme: themeBasic,
};

interface StyledPanelHeaderProps {
    isLeftPanel: boolean;
}

export const StyledPanelHeader = styled.div<StyledPanelHeaderProps>`
    flex: auto;
    margin: ${({ isLeftPanel, theme }): string =>
        isLeftPanel ? theme.spacing(0, 1, 0, 0) : theme.spacing(0, 0, 0, 1)};
    width: 50%;

    div > {
        width: 100%;
    }
`;

StyledPanelHeader.defaultProps = {
    theme: themeBasic,
};

export const StyledLoader = styled.div`
    margin: ${({ theme }): string => theme.spacing(6, 0, 0, 0)};
`;

StyledLoader.defaultProps = {
    theme: themeBasic,
};

interface TableWrapperProps {
    hasMaxHeight: boolean;
}

export const TableWrapper = styled.div<TableWrapperProps>`
    ${({ hasMaxHeight }): SimpleInterpolation =>
        hasMaxHeight &&
        css`
            max-height: ${window.innerHeight}px;
            overflow: auto;
        `}
`;

TableWrapper.defaultProps = {
    theme: themeBasic,
};
