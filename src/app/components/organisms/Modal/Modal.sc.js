import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import styled from 'styled-components';

export const StyledModal = styled.div`
    ${setBoxSizing()}
    display: flex;
    position: fixed;
    top: 0;
    left: 50%;
    flex-direction: column;
    flex-wrap: nowrap;
    transform: ${({ isVisible }) => `translate3d(-50%, ${isVisible ? '0' : '100%'}, 0)`};
    transition: all 500ms ease;
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    z-index: 3;
    padding: ${({ theme }) => theme.spacing(3.5)} 0 0 0;
    width: 100%;
    max-width: ${({ theme }) => theme.spacing(128)};
    height: 100%;
`;

StyledModal.propTypes = {
    isVisible: PropTypes.bool.isRequired,
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
