import styled from 'styled-components';
import { themeBasic } from '../../../styles/theming/themes/basic';

export const StyledPanelHeader = styled.div`
    display: flex;
    align-items: center;
    padding: ${({ theme }) => theme.spacing(0, 0, 1, 0)};
`;

StyledPanelHeader.defaultProps = {
    theme: themeBasic,
};

export const Title = styled.div`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().h1)}
    color: ${({ theme }) => theme.colorText.primary};
`;

Title.defaultProps = {
    theme: themeBasic,
};

export const FunctionalWrapper = styled.div`
    margin: 0 0 0 auto;
`;
