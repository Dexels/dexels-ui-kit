import styled, { css } from 'styled-components';
import defaultTheme from '../../../styles/theme/theme';
import { INPUT_VARIANTS } from '../../../utils/constants';
import PropTypes from 'prop-types';

export const StyledInputPassword = styled.div`
    position: relative;
`;

export const VisibilitySwitch = styled.button`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().h2)};
    appearance: none;
    position: absolute;
    outline: none;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    padding: 4px 8px;

    ${({ variant }) => variant === INPUT_VARIANTS.COMPACT && css`
        top: -2px;
        right: 0;
        padding: 0 0 0 8px;
    `};

    ${({ variant }) => variant === INPUT_VARIANTS.FULL_SIZE && css`
        top: 5px;
        right: 8px;
        padding: 4px 8px;
    `};
`;

VisibilitySwitch.propTypes = {
    theme: PropTypes.shape({
        availableTextStyles: PropTypes.func.isRequired,
        textStyling: PropTypes.func.isRequired,
    }).isRequired,
    variant: PropTypes.oneOf(Object.values(INPUT_VARIANTS)).isRequired,
};

VisibilitySwitch.defaultProps = {
    theme: defaultTheme,
};
