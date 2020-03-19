import { setBoxSizing } from '../../../styles/mixins/setBoxSizing';
import styled from 'styled-components';
import { themeBasic } from '../../../styles/theming/themes/basic';

export const StyledDialogFooter = styled.footer`
    ${setBoxSizing()}
    display: flex;
    align-items: center;
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
    background-color: ${({ theme }): string => theme.shades.seven};
    padding: ${({ theme }): string => theme.spacing(2)};
`;

StyledDialogFooter.defaultProps = {
    theme: themeBasic,
};

export const Text = styled.p`
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().body2)}
    padding: ${({ theme }): string => theme.spacing(0, 2, 0, 0)};
    word-break: break-word;
    color: ${({ theme }): string => theme.colorText.primary};
`;

Text.defaultProps = {
    theme: themeBasic,
};

export const ButtonBarWrapper = styled.div`
    display: flex;
    flex: 0 0 auto;
    flex-wrap: nowrap;
    align-items: center;
    margin: 0 0 0 auto;
`;

export const ButtonWrapper = styled.div`
    margin: ${({ theme }): string => theme.spacing(0, 1, 0, 1)};
`;

ButtonWrapper.defaultProps = {
    theme: themeBasic,
};
