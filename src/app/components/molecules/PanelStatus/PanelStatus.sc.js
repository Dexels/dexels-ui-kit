import styled from 'styled-components';
import { themeBasic } from '../../../styles/theming/themes/basic';
import { themePropTypes } from '../../../styles/theming/themes/propTypes';

export const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    padding: ${({ theme }) => theme.spacing(0, 0, 1, 0)};
`;

StyledHeader.propTypes = {
    theme: themePropTypes,
};

StyledHeader.defaultProps = {
    theme: themeBasic,
};

export const Title = styled.div`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().h1)}
    color: ${({ theme }) => theme.colorText.primary};
`;

Title.propTypes = {
    theme: themePropTypes,
};

Title.defaultProps = {
    theme: themeBasic,
};

export const FunctionalWrapper = styled.div`
    align-self: center;
    margin: 0 0 0 auto;
`;

FunctionalWrapper.propTypes = {
    theme: themePropTypes,
};

FunctionalWrapper.defaultProps = {
    theme: themeBasic,
};
