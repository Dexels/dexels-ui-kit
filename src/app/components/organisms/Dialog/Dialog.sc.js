import { availableTextStyles, textStyling } from '../../../styles/theme/textStyles';
import {
    backgroundColorHeader,
    colorBodyDark,
    colorHeader,
    themeModes,
} from '../../../styles/theme/theme';
import {
    black,
    grey100,
    white,
} from '../../../styles/colors/colors';
import { borderRadius, spacingUnit } from '../../../styles/theme/layout';
import { DIALOG_ALIGNMENTS, DIALOG_DIRECTIONS, DIALOG_ELEVATIONS } from './Dialog.consts';
import styled, { css } from 'styled-components';
import getAlignment from '../../../styles/mixins/getAlignment';
import getElevation from '../../../styles/mixins/getElevation';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import styledTheming from 'styled-theming';

const dialogBodyBackgroundColor = styledTheming('mode', {
    [themeModes.basic]: white,
    [themeModes.dark]: grey100,
    [themeModes.light]: white,
});

const dialogBodyColor = styledTheming('mode', {
    [themeModes.basic]: colorBodyDark,
    [themeModes.dark]: white,
    [themeModes.light]: colorBodyDark,
});

export const StyledDialog = styled.div`
    ${setBoxSizing()};
    ${({ elevation }) => getElevation(elevation)};
    margin: auto;
    border-radius: ${spacingUnit};
    width: ${({ width }) => width};
`;

StyledDialog.propTypes = {
    elevation: PropTypes.oneOf(Object.values(DIALOG_ELEVATIONS)).isRequired,
    width: PropTypes.string.isRequired,
};

export const ButtonWrapper = styled.div`
    margin: 0 calc(${spacingUnit} * 2) 0 0;
`;

export const ButtonClose = styled.button`
    position: fixed;
    top: 2px;
    z-index: 2;
    outline: none;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    padding: ${spacingUnit};
    text-align: ${({ position }) => (position === DIALOG_DIRECTIONS.LTR ? 'left' : 'right')};
    color: ${black};
    font-size: calc(${spacingUnit} * 3);

    ${({ position }) => position === DIALOG_DIRECTIONS.LTR && css`
        left: 2px;
    `};

    ${({ position }) => position === DIALOG_DIRECTIONS.RTL && css`
        right: 2px;
    `};

    &:active,
    &:hover {
        background-color: transparent;
        color: ${white};
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
    border-top-left-radius: ${borderRadius};
    border-top-right-radius: ${borderRadius};
    background-color: ${backgroundColorHeader};
    padding: calc(${spacingUnit} * 2);
    min-height: 56px;
    color: ${colorHeader};
`;

Header.propTypes = {
    alignment: PropTypes.oneOf(Object.values(DIALOG_ALIGNMENTS)).isRequired,
};

export const Body = styled.div`
    ${({ alignment }) => getAlignment(alignment)};
    ${textStyling(availableTextStyles().body1)};
    background-color: ${dialogBodyBackgroundColor};
    padding: calc(${spacingUnit} * 2);
    color: ${dialogBodyColor};

    ${({ hasHeader }) => !hasHeader && css`
        border-radius: ${borderRadius} ${borderRadius} 0 0;
    `};
`;

Body.propTypes = {
    alignment: PropTypes.oneOf(Object.values(DIALOG_ALIGNMENTS)).isRequired,
    hasHeader: PropTypes.bool.isRequired,
};
