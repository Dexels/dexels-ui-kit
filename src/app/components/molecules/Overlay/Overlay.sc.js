import styled, { css } from 'styled-components';
import defaultTheme from '../../../styles/theme/theme';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import validateThemePropTypes from '../../../utils/validators/validateThemePropTypes';

export const StyledOverlay = styled.div`
    ${setBoxSizing()};
    display: flex;
    position: fixed;
    z-index: 1;
    width: ${({ isFullscreen, width }) => (isFullscreen ? '100%' : `${width}%`)};
    height: ${({ isFullscreen, height }) => (isFullscreen ? '100%' : `${height}%`)};
    overflow: auto;

    ${({ isFullscreen }) => isFullscreen && css`
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    `};

    ${({ height, isFullscreen, width }) => !isFullscreen && css`
        margin: auto;
        width: ${width};
        height: ${height};
    `};

    ${({ isVisible, theme }) => isVisible && css`
        background-color: ${`rgba(0, 0, 0, ${theme.overlay.opacity})`}
    `};
`;

StyledOverlay.propTypes = {
    theme: PropTypes.shape({
        overlay: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
};

StyledOverlay.defaultProps = {
    theme: defaultTheme,
};

export default StyledOverlay;
