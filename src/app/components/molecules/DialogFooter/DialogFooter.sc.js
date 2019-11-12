import { themeBasic, themePropTypes } from '../../../styles/theming/themes/basic';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import styled from 'styled-components';

export const StyledDialogFooter = styled.footer`
    ${setBoxSizing()}
    display: flex;
    align-items: center;
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
    background-color: ${({ theme }) => theme.shades.seven};
    padding: ${({ theme }) => theme.spacing(2)};
`;

StyledDialogFooter.propTypes = {
    theme: themePropTypes,
};

StyledDialogFooter.defaultProps = {
    theme: themeBasic,
};

export const TextWrapper = styled.div`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body2)}
    padding: ${({ theme }) => theme.spacing(0, 1, 0, 0)};
    word-break: break-word;
`;

TextWrapper.propTypes = {
    theme: themePropTypes,
};

TextWrapper.defaultProps = {
    theme: themeBasic,
};

export const ButtonBarWrapper = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    margin: 0 0 0 auto;
`;

export const ButtonWrapper = styled.div`
    margin: ${({ theme }) => theme.spacing(0, 2, 0, 0)};
`;

ButtonWrapper.propTypes = {
    theme: themePropTypes,
};

ButtonWrapper.defaultProps = {
    theme: themeBasic,
};
