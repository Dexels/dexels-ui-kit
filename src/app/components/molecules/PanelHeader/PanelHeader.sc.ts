import { getStatusColor } from '../../../styles/mixins/getStatusColor';
import { Status } from '../../../types';
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

interface TitleProps {
    status: Status;
}

export const Title = styled.div<TitleProps>`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().h1)}
    color: ${({ status, theme }) => getStatusColor(status, theme)};
`;

Title.defaultProps = {
    theme: themeBasic,
};

export const FunctionalWrapper = styled.div`
    margin: 0 0 0 auto;
`;
