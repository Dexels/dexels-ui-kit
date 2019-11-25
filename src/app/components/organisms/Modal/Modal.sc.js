import { MODAL_EASINGS } from './Modal.consts';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import { slideUpEffect } from '../../../styles/mixins/transitionEffects';
import styled from 'styled-components';
import { themeBasic } from '../../../styles/theming/themes/basic';
import { themePropTypes } from '../../../styles/theming/themes/propTypes';

export const StyledModal = styled.div`
    ${setBoxSizing()}
    ${({ isVisible, transitionDuration, transitionEasing }) => slideUpEffect({
        duration: transitionDuration,
        easing: transitionEasing,
        isVisible,
    })}
    display: flex;
    position: fixed;
    top: 0;
    left: 50%;
    flex-direction: column;
    flex-wrap: nowrap;
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    z-index: 3;
    padding: ${({ theme }) => theme.spacing(3.5)} 0 0 0;
    width: 100%;
    max-width: ${({ theme }) => theme.spacing(128)};
    height: 100%;
`;

StyledModal.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    theme: themePropTypes,
    transitionDuration: PropTypes.number.isRequired,
    transitionEasing: PropTypes.oneOf(Object.values(MODAL_EASINGS)).isRequired,
};

StyledModal.defaultProps = {
    theme: themeBasic,
};

export const HeaderWrapper = styled.header`
    position: relative;
    flex: 0 0 auto;
`;

export const Body = styled.div`
    flex: 1 1 auto;
    background-color: ${({ theme }) => theme.shades.nine};
    padding: ${({ theme }) => theme.spacing(2)};
    overflow: auto;
`;

Body.propTypes = {
    theme: themePropTypes,
};

Body.defaultProps = {
    theme: themeBasic,
};
