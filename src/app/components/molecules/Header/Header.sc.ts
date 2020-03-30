import styled, { FlattenSimpleInterpolation } from 'styled-components';
import { Elevation } from '../../../types';
import { getElevation } from '../../../styles/mixins/getElevation';
import { themeBasic } from '../../../styles/theming/themes/basic';

interface StyledHeaderProps {
    elevation: Elevation;
    isInverted: boolean;
}

export const StyledHeader = styled.div<StyledHeaderProps>`
    ${({ elevation }): FlattenSimpleInterpolation => getElevation(elevation)}
    display: flex;
    flex-direction: row;
    background: ${({ isInverted, theme }): string =>
        isInverted ? theme.header.backgroundColor.secondary : theme.header.backgroundColor.primary};
    height: ${({ theme }): string => theme.spacing(6.5)};
    color: ${({ isInverted, theme }): string =>
        isInverted ? theme.colorText.primary : theme.colorTextContrast.primary};
`;

StyledHeader.defaultProps = {
    theme: themeBasic,
};

export const Buttons = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    padding: ${({ theme }): string => theme.spacing(0, 0, 0, 2)};
`;

Buttons.defaultProps = {
    theme: themeBasic,
};

export const Title = styled.div`
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().body1)}
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: ${({ theme }): string => theme.spacing(0, 0, 0, 2)};
`;

Title.defaultProps = {
    theme: themeBasic,
};

export const ToolbarWrapper = styled.div`
    align-self: center;
    margin: 0 0 0 auto;
    padding: ${({ theme }): string => theme.spacing(0, 1, 0, 1)};
`;

ToolbarWrapper.defaultProps = {
    theme: themeBasic,
};
