import { MODAL_ALIGNMENTS, MODAL_ELEVATIONS } from './Modal.consts';
import styled, { css } from 'styled-components';
import getAlignment from '../../../styles/mixins/getAlignment';
import getElevation from '../../../styles/mixins/getElevation';
import PropTypes from 'prop-types';

export const StyledModal = styled.div`
    ${({ elevation }) => getElevation(elevation)};
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    margin: auto;
    border-radius: ${({ theme }) => theme.spacing(1)};
    width: 100%;
    height: 100%;
`;

StyledModal.propTypes = {
    elevation: PropTypes.oneOf(Object.values(MODAL_ELEVATIONS)).isRequired,
};

export const HeaderWrapper = styled.header`
    display: flex;
`;

export const Body = styled.div`
    ${({ alignment }) => getAlignment(alignment)};
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body1)};
    background-color: ${({ theme }) => theme.shades.nine};
    padding: ${({ theme }) => theme.spacing(2)};
    height: inherit;
    color: ${({ theme }) => theme.colorPrimary
};

    ${({ hasHeader }) => !hasHeader && css`
        border-radius: ${({ theme }) => theme.spacing(1, 1, 0, 0)};
    `};
`;

Body.propTypes = {
    alignment: PropTypes.oneOf(Object.values(MODAL_ALIGNMENTS)).isRequired,
    hasHeader: PropTypes.bool.isRequired,
};
