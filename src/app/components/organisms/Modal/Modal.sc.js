import getElevation from '../../../styles/mixins/getElevation';
import MODAL_ELEVATIONS from './Modal.consts';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import styled from 'styled-components';

export const StyledModal = styled.div`
    ${setBoxSizing()};
    ${({ elevation }) => getElevation(elevation)};
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    flex-direction: column;
    flex-wrap: nowrap;
    z-index: 3;
    width: 100%;
    height: 100%;
`;

StyledModal.propTypes = {
    elevation: PropTypes.oneOf(Object.values(MODAL_ELEVATIONS)).isRequired,
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
