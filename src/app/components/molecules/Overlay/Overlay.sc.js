import defaultTheme from '../../../styles/theme/theme';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import validateThemePropTypes from '../../../utils/validators/validateThemePropTypes';

export const StyledOverlay = styled.div`
    display: ${({ isVisible }) => !isVisible && 'none'};
    display: ${({ isVisible }) => isVisible && 'flex'};
    position: fixed;
    top: ${({ fullScreen }) => fullScreen && '0'};
    left: ${({ fullScreen }) => fullScreen && '0'};
    z-index: 1;
    margin: ${({ fullScreen }) => !fullScreen && 'auto'};
    background-color: rgb(0,0,0);
    background-color: ${({ theme }) => theme.overlay.backgroundColor};
    width: ${({ fullScreen, width }) => !fullScreen && width};
    width: ${({ fullScreen }) => fullScreen && '100%'};
    height: ${({ fullScreen, height }) => !fullScreen && height};
    height: ${({ fullScreen }) => fullScreen && '100%'};
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
