import styled, { FlattenSimpleInterpolation } from 'styled-components';
import { Elevation } from '../../../types';
import { getElevation } from '../../../styles/mixins/getElevation';
import { setBoxSizing } from '../../../styles/mixins/setBoxSizing';
import { themeBasic } from '../../../styles/theming/themes/basic';

interface StyledCardNoResultsProps {
    elevation: Elevation;
}

export const StyledCardNoResults = styled.div<StyledCardNoResultsProps>`
    ${setBoxSizing()}
    ${({ elevation }): FlattenSimpleInterpolation => getElevation(elevation)}
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    background-color: ${({ theme }): string => theme.card.backgroundColor};
    padding: ${({ theme }): string => theme.spacing(3)};
`;

StyledCardNoResults.defaultProps = {
    theme: themeBasic,
};

export const Header = styled.div`
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().h1)}
    margin: ${({ theme }): string => theme.spacing(0, 0, 2)};
    color: ${({ theme }): string => theme.colorText.primary};
`;

Header.defaultProps = {
    theme: themeBasic,
};

export const Title = styled.p`
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().h3)}
    margin: ${({ theme }): string => theme.spacing(0.5, 0.5, 0.5, 0)};
    color: ${({ theme }): string => theme.colorText.secondary};
`;

Title.defaultProps = {
    theme: themeBasic,
};

export const Item = styled.p`
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().body1)}
    margin: ${({ theme }): string => theme.spacing(0, 0, 0.5)};
    color: ${({ theme }): string => theme.shades.one};
`;

Item.defaultProps = {
    theme: themeBasic,
};

export const Left = styled.div`
    flex: 0 0 auto;
    margin-top: 4px; /* Correction for line-height Title element */
    width: ${({ theme }): string => theme.spacing(6)};
`;

Left.defaultProps = {
    theme: themeBasic,
};

export const IconWrapper = styled.div`
    color: ${({ theme }): string => theme.colorText.primary};
`;

IconWrapper.defaultProps = {
    theme: themeBasic,
};

export const Right = styled.div`
    flex: 1 1 auto;
`;
