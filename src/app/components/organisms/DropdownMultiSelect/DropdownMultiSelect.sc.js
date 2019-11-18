import { rippleEffect, rippleEffectInit, rippleEffectReset } from '../../../styles/mixins/rippleEffect';
import styled, { css } from 'styled-components';
import { themeBasic, themePropTypes } from '../../../styles/theming/themes/basic';
import { DROPDOWN_MULTISELECT_ELEVATIONS } from './DropdownMultiSelect.consts';
import getElevation from '../../../styles/mixins/getElevation';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';

export const StyledDropdownMultiSelect = styled.div`
    ${setBoxSizing()}
    position: relative;
`;

export const ListWrapper = styled.div`
    ${({ elevation }) => getElevation(elevation)}
    position: absolute;
    margin: ${({ theme }) => theme.spacing(1, 0, 0, 0)};
    border-radius: ${({ theme }) => theme.spacing(1)};
    background-color: ${({ theme }) => theme.shades.nine};
    width: 100%;
`;

ListWrapper.propTypes = {
    elevation: PropTypes.oneOf(Object.values(DROPDOWN_MULTISELECT_ELEVATIONS)).isRequired,
    theme: themePropTypes,
};

ListWrapper.defaultProps = {
    theme: themeBasic,
};

export const StaticItem = styled.div`
    ${rippleEffectInit()}
    ${({ elevation }) => getElevation(elevation)}
    margin: 0 0 2px;
    border-radius: ${({ theme }) => theme.spacing(1, 1, 0, 0)};
    background-color: ${({ theme }) => theme.shades.eight};
    padding: ${({ theme }) => theme.spacing(1, 1, 1, 2)};

    &:after {
        ${({ theme }) => rippleEffect(theme.colorSecondary)}
    }

    &:active:after {
        ${rippleEffectReset()}
    }
`;

StaticItem.propTypes = {
    elevation: PropTypes.oneOf(Object.values(DROPDOWN_MULTISELECT_ELEVATIONS)).isRequired,
    theme: themePropTypes,
};

StaticItem.defaultProps = {
    theme: themeBasic,
};

export const List = styled.ul`
    margin: 0;
    background-color: ${({ theme }) => theme.shades.nine};
    padding: ${({ theme }) => theme.spacing(0, 0, 0, 2)};
    overflow: auto;
    list-style-type: none;

    ${({ maxHeight }) => maxHeight && css`
        max-height: ${maxHeight};
    `}
`;

List.propTypes = {
    maxHeight: PropTypes.string.isRequired,
    theme: themePropTypes,
};

List.defaultProps = {
    theme: themeBasic,
};

export const ListItem = styled.li`
    ${rippleEffectInit()}
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body1)}
    padding: ${({ theme }) => theme.spacing(1, 0)};

    &:after {
        ${({ theme }) => rippleEffect(theme.colorSecondary)}
    }

    &:active:after {
        ${rippleEffectReset()}
    }

    &:hover {
        background-color: ${({ theme }) => theme.shades.eight};
    }
`;

ListItem.propTypes = {
    theme: themePropTypes,
};

ListItem.defaultProps = {
    theme: themeBasic,
};