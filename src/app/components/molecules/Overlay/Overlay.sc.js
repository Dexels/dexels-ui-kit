import styled, { css } from 'styled-components';
import defaultTheme from '../../../styles/theme/theme';
import PropTypes from 'prop-types';
import validateThemePropTypes from '../../../utils/validators/validateThemePropTypes';

export const StyledOverlay = styled.div`
    display: flex;
    position: fixed;
    ${({ isFullscreen }) => isFullscreen && css`
        top: 0;
        left: 0;
    `};
    z-index: 1;
    ${({ isFullscreen }) => !isFullscreen && css`
        margin: auto;
    `};
    ${({ isVisible, theme }) => isVisible && css`
        background-color: ${`rgba(0,0,0, ${theme.overlay.opacity})`}
    `};
    width: ${({ isFullscreen, width }) => (isFullscreen ? '100%' : `${width}%`)};
    height: ${({ isFullscreen, height }) => (isFullscreen ? '100%' : `${height}%`)};
    overflow: auto;
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
