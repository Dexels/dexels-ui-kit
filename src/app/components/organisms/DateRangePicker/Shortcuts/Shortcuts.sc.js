import { themeBasic, themePropTypes } from '../../../../styles/theming/themes/basic';
import styled from 'styled-components';

export const StyledShortcuts = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: ${({ theme }) => theme.spacing(0, 4, 1.5)};
`;

StyledShortcuts.propTypes = {
    theme: themePropTypes,
};

StyledShortcuts.defaultProps = {
    theme: themeBasic,
};

export const Text = styled.p`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body1)}
    flex: 0 0 auto;
    margin: ${({ theme }) => theme.spacing(0, 2, 1, 0)};
    color: ${({ theme }) => theme.colorHeaderText.primary};
    font-weight: 600;
`;

Text.propTypes = {
    theme: themePropTypes,
};

Text.defaultProps = {
    theme: themeBasic,
};

export const ButtonWrapper = styled.div`
    flex: 0 0 auto;
    margin: ${({ theme }) => theme.spacing(0, 2, 1, 0)};
`;

ButtonWrapper.propTypes = {
    theme: themePropTypes,
};

ButtonWrapper.defaultProps = {
    theme: themeBasic,
};