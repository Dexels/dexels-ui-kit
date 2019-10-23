import { availableTextStyles, textStyling } from '../../../styles/theme/textStyles';
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
    border-radius: ${({ theme }) => theme.spacingValue};
    width: ${({ width }) => width};
`;

StyledDialog.propTypes = {
    elevation: PropTypes.oneOf(Object.values(DIALOG_ELEVATIONS)).isRequired,
    width: PropTypes.string.isRequired,
};

export const ButtonWrapper = styled.div`
    margin: 0 ${({ theme }) => `calc(${theme.spacingValue} * 2)`} 0 0;
`;

export const ButtonClose = styled.button`
    position: fixed;
    top: 2px;
    z-index: 2;
    outline: none;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    padding: ${({ theme }) => theme.spacingValue};
    text-align: ${({ position }) => (position === DIALOG_DIRECTIONS.LTR ? 'left' : 'right')};
    color: ${({ theme }) => theme.colorDark.dark};
    font-size: ${({ theme }) => `calc(${theme.spacingValue} * 3)`};

    ${({ position }) => position === DIALOG_DIRECTIONS.LTR && css`
        left: 2px;
    `};

    ${({ position }) => position === DIALOG_DIRECTIONS.RTL && css`
        right: 2px;
    `};

    &:active,
    &:hover {
        background-color: transparent;
        color: ${({ theme }) => theme.colorLight.light};
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
    ${textStyling(availableTextStyles().h1)};
    display: flex;
    align-items: center;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-color: ${({ theme }) => theme.colorPrimary.dark};
    padding: ${({ theme }) => `calc(${theme.spacingValue} * 2)`};
    min-height: 56px;
    color: ${({ theme }) => theme.colorLight.light};
`;

Header.propTypes = {
    alignment: PropTypes.oneOf(Object.values(DIALOG_ALIGNMENTS)).isRequired,
};

export const Body = styled.div`
    ${({ alignment }) => getAlignment(alignment)};
    ${textStyling(availableTextStyles().body1)};
    background-color: ${({ theme }) => theme.colorLight.light};
    padding: ${({ theme }) => `calc(${theme.spacingValue} * 2)`};
    color: ${({ theme }) => theme.colorDark.main};

    ${({ hasHeader }) => !hasHeader && css`
        border-radius: 8px 8px 0 0;
    `};
`;

Body.propTypes = {
    alignment: PropTypes.oneOf(Object.values(DIALOG_ALIGNMENTS)).isRequired,
    hasHeader: PropTypes.bool.isRequired,
};
