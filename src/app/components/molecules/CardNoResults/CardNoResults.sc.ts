import { Elevation } from '../../../types';
import { getElevation } from '../../../styles/mixins/getElevation';
import { setBoxSizing } from '../../../styles/mixins/setBoxSizing';
import styled from 'styled-components';
import { themeBasic } from '../../../styles/theming/themes/basic';

interface StyledCardNoResultsProps {
    elevation: Elevation;
}

export const StyledCardNoResults = styled.div<StyledCardNoResultsProps>`
    ${setBoxSizing()}
    ${({ elevation }) => getElevation(elevation)}
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    background-color: ${({ theme }) => theme.card.backgroundColor};
    padding: ${({ theme }) => theme.spacing(3)};
`;

StyledCardNoResults.defaultProps = {
    theme: themeBasic,
};

export const Header = styled.div`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().h1)}
    margin: ${({ theme }) => theme.spacing(0, 0, 2)};
    color: ${({ theme }) => theme.colorText.primary};
`;

Header.defaultProps = {
    theme: themeBasic,
};

export const Title = styled.p`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().h3)}
    margin: ${({ theme }) => theme.spacing(0.5, 0.5, 0.5, 0)};
    color: ${({ theme }) => theme.colorText.secondary};
`;

Title.defaultProps = {
    theme: themeBasic,
};

export const Item = styled.p`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body1)}
    margin: ${({ theme }) => theme.spacing(0, 0, 0.5)};
    color: ${({ theme }) => theme.colorText.primary};
`;

Item.defaultProps = {
    theme: themeBasic,
};

export const Left = styled.div`
    flex: 0 0 auto;
    margin-top: 4px; /* Correction for line-height Title element */
    width: ${({ theme }) => theme.spacing(6)};
`;

Left.defaultProps = {
    theme: themeBasic,
};

export const IconWrapper = styled.div`
    color: ${({ theme }) => theme.colorText.primary};
    font-size: 30px;

    span {
        display: block;
    }
`;

IconWrapper.defaultProps = {
    theme: themeBasic,
};

export const Right = styled.div`
    flex: 1 1 auto;
`;
