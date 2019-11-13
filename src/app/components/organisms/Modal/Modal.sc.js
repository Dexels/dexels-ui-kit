import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import styled from 'styled-components';

export const StyledModal = styled.div`
    ${setBoxSizing()};
    position: fixed;
    display: flex;
    top: 0;
    left: 50%;
    flex-direction: column;
    flex-wrap: nowrap;
    z-index: 3;
    width: 100%;
    max-width: 1024px;
    height: 100%;
    padding: ${({ theme }) => theme.spacing(6.5)} 0 0 0;
    opacity: ${({ isDisplaying }) => (isDisplaying ? 1 : 0)};
    transform: ${({ isDisplaying }) => `translate3d(-50%, ${isDisplaying ? '0' : '100%'}, 0)`};
    transition: all 500ms ease;
`;

StyledModal.propTypes = {
    isDisplaying: PropTypes.bool.isRequired,
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
