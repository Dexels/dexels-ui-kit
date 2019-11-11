import { themeBasic, themePropTypes } from '../../../../styles/theming/themes/basic';
import styled from 'styled-components';

export const StyledFooter = styled.footer`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-end;
    background-color: ${({ theme }) => theme.shades.seven};
    padding: ${({ theme }) => theme.spacing(2)};
`;

StyledFooter.propTypes = {
    theme: themePropTypes,
};

StyledFooter.defaultProps = {
    theme: themeBasic,
};

export const ButtonWrapper = styled.div`
    flex: 0 0 auto;
    margin: ${({ theme }) => theme.spacing(0, 0, 0, 1)};
`;

ButtonWrapper.propTypes = {
    theme: themePropTypes,
};

ButtonWrapper.defaultProps = {
    theme: themeBasic,
};
