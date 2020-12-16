import styled from 'styled-components';
import { themeBasic } from '../../../styles/theming/themes/basic';

export const ErrorMessage = styled.div`
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().caption)}
    display: flex;
    align-items: center;
    width: 100%;
    height: ${({ theme }): string => theme.spacing(4)};
    color: ${({ theme }): string => theme.colorInvalid};
`;

ErrorMessage.defaultProps = {
    theme: themeBasic,
};

export const ErrorMessageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: ${({ theme }): string => theme.spacing(0.5, 0, 0)};
    border-left: ${({ theme }): string => `8px solid ${theme.colorInvalid}`};
    padding: ${({ theme }): string => theme.spacing(0, 0, 0, 2)};
`;

ErrorMessageWrapper.defaultProps = {
    theme: themeBasic,
};
