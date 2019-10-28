import { DIALOG_ALIGNMENTS, DIALOG_DIRECTIONS, DIALOG_ELEVATIONS } from './Dialog.consts';
import styled, { css } from 'styled-components';
import getAlignment from '../../../styles/mixins/getAlignment';
import getElevation from '../../../styles/mixins/getElevation';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';

export const StyledDialog = styled.div`
    ${setBoxSizing()};
    ${({ elevation }) => getElevation(elevation)};
    margin: auto;
    border-radius: 8px;
    width: ${({ width }) => width};
`;

StyledDialog.propTypes = {
    elevation: PropTypes.oneOf(Object.values(DIALOG_ELEVATIONS)).isRequired,
    width: PropTypes.string.isRequired,
};

export const ButtonWrapper = styled.div`
    margin: ${({ theme }) => theme.spacing(0, 2, 0, 0)};
`;

export const ButtonClose = styled.button`
    position: fixed;
    top: 2px;
    z-index: 2;
    outline: none;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    padding: ${({ theme }) => theme.spacing(1)};
    text-align: ${({ position }) => (position === DIALOG_DIRECTIONS.LTR ? 'left' : 'right')};
    color: ${({ theme }) => theme.colorHeaderText.primary};
    font-size: ${({ theme }) => theme.spacing(3)};

    ${({ position }) => position === DIALOG_DIRECTIONS.LTR && css`
        left: 2px;
    `};

    ${({ position }) => position === DIALOG_DIRECTIONS.RTL && css`
        right: 2px;
    `};

    &:active,
    &:hover {
        background-color: transparent;
        color: ${({ theme }) => theme.shade9};
    }

    span {
        display: block;
    }
`;

ButtonClose.propTypes = {
    position: PropTypes.oneOf(Object.values(DIALOG_DIRECTIONS)).isRequired,
};

export const Header = styled.header`
    ${({ alignment }) => getAlignment(alignment)};
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().h1)};
    display: flex;
    align-items: center;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-color: ${({ theme }) => theme.colorPrimary};
    padding: ${({ theme }) => theme.spacing(2)};
    min-height: 56px;
    color: ${({ theme }) => theme.shade9};
`;

Header.propTypes = {
    alignment: PropTypes.oneOf(Object.values(DIALOG_ALIGNMENTS)).isRequired,
};

export const Body = styled.div`
    ${({ alignment }) => getAlignment(alignment)};
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body1)};
    background-color: ${({ theme }) => theme.shade9};
    padding: ${({ theme }) => theme.spacing(2)};
    color: ${({ theme }) => theme.colorHeaderText.primary};

    ${({ hasHeader }) => !hasHeader && css`
        border-radius: 8px 8px 0 0;
    `};
`;

Body.propTypes = {
    alignment: PropTypes.oneOf(Object.values(DIALOG_ALIGNMENTS)).isRequired,
    hasHeader: PropTypes.bool.isRequired,
};
