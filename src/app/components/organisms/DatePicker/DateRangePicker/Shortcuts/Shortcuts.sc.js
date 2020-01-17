import styled from 'styled-components';
import { themeBasic } from '../../../../../styles/theming/themes/basic';
import { themePropTypes } from '../../../../../styles/theming/themes/propTypes';

export const StyledShortcuts = styled.div`
    display: flex;
    align-items: center;
    padding: ${({ theme }) => theme.spacing(0, 2.75, 1.5)};
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
    color: ${({ theme }) => theme.colorText.primary};
    font-weight: 600;
`;

Text.propTypes = {
    theme: themePropTypes,
};

Text.defaultProps = {
    theme: themeBasic,
};

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

Wrapper.propTypes = {
    theme: themePropTypes,
};

Wrapper.defaultProps = {
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
