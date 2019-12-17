import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import styled from 'styled-components';
import { themeBasic } from '../../../styles/theming/themes/basic';
import { themePropTypes } from '../../../styles/theming/themes/propTypes';

export const StyledOverlay = styled.div`
    ${setBoxSizing()}
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
    opacity: ${({ isVisible }) => (isVisible ? '0.4' : '0')};
    z-index: 1;
    background-color: black;
    cursor: ${({ isClickable }) => (isClickable ? 'pointer' : 'auto')};
    width: 100%;
    height: 100%;
`;

StyledOverlay.propTypes = {
    isClickable: PropTypes.bool.isRequired,
    isVisible: PropTypes.bool.isRequired,
    theme: themePropTypes,
};

StyledOverlay.defaultProps = {
    theme: themeBasic,
};

export default StyledOverlay;
