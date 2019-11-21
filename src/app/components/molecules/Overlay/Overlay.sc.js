import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import { themeBasic } from '../../../styles/theming/themes/basic';
import { themePropTypes } from '../../../styles/theming/themes/themePropTypes';

export const StyledOverlay = styled.div`
    ${setBoxSizing()}
    display: flex;
    position: fixed;
    z-index: 1;
    overflow: auto;

    ${({ height, isFullscreen, width }) => (isFullscreen ? css`
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    ` : css`
        margin: auto;
        width: ${width}%;
        height: ${height}%;
    `)}

    ${({ isVisible }) => isVisible && css`
        background-color: rgba(0, 0, 0, 0.4);
    `}
`;

StyledOverlay.propTypes = {
    height: PropTypes.number.isRequired,
    isFullscreen: PropTypes.bool.isRequired,
    isVisible: PropTypes.bool.isRequired,
    theme: themePropTypes,
    width: PropTypes.number.isRequired,
};

StyledOverlay.defaultProps = {
    theme: themeBasic,
};

export default StyledOverlay;
