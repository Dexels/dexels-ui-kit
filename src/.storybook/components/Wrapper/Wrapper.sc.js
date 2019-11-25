import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { themeBasic } from '../../../app/styles/theming/themes/basic';
import { themePropTypes } from '../../../app/styles/theming/themes/propTypes';
import { WRAPPER_WIDTHS } from './Wrapper.consts';

export const StyledWrapper = styled.div`
    background-color: ${({ isTransparent, theme }) => (isTransparent ? 'transparent' : theme.background.primary)};
    padding-top: ${({ theme }) => theme.spacing(3)};
    padding-bottom: ${({ theme }) => theme.spacing(3)};
    min-height: 100vh;

    ${({ width }) => css`
        ${width === WRAPPER_WIDTHS.SMALL && css`
            padding-right: 25%;
            padding-left: 25%;
        `}

        ${width === WRAPPER_WIDTHS.MEDIUM && css`
            padding-right: 15%;
            padding-left: 15%;
        `}

        ${width === WRAPPER_WIDTHS.LARGE && css`
            padding-right: 5%;
            padding-left: 5%;
        `}
    `}
`;

StyledWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    isTransparent: PropTypes.bool.isRequired,
    theme: themePropTypes,
    width: PropTypes.oneOf(Object.values(WRAPPER_WIDTHS)).isRequired,
};

StyledWrapper.defaultProps = {
    theme: themeBasic,
};

export default StyledWrapper;
