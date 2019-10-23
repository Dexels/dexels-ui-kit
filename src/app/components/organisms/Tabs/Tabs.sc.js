import { availableTextStyles, textStyling } from '../../../styles/theme/textStyles';
import {
    backgroundColorPrimary,
    colorDisabled,
    colorPrimary,
    colorPrimaryHover,
    getThemeValue,
    themeModes,
} from '../../../styles/theme/theme';
import {
    grey10,
    grey2,
    grey25,
} from '../../../styles/colors/colors';
import { rippleEffect, rippleEffectReset } from '../../../styles/mixins/rippleEffect';
import styled, { css } from 'styled-components';
import { ELEVATIONS } from '../../../utils/constants';
import getElevation from '../../../styles/mixins/getElevation';
import PropTypes from 'prop-types';
import styledTheming from 'styled-theming';

const tabsHeaderListDividerColor = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => getThemeValue(theme, 'tabsHeaderListDividerColor', grey25),
    [themeModes.dark]: grey2,
    [themeModes.light]: grey10,
});

export const TabHeader = styled.button`
    ${textStyling(availableTextStyles().h3)};
    outline: none;
    border: 0;
    border-bottom: 2px solid ${backgroundColorPrimary};
    background-color: ${backgroundColorPrimary};
    cursor: pointer;
    padding: 0 8px;
    width: fit-content;
    text-align: center;
    color: ${colorPrimary};

    ${({ isFullWidth }) => isFullWidth && css`
        width: 100%;
    `};

    ${({ isActive }) => isActive && css`
        border-bottom-color: ${colorPrimary};
    `};

    ${({ isDisabled }) => isDisabled && css`
        pointer-events: none;
        color: ${colorDisabled};
    `};

    &:after {
        ${({ theme }) => rippleEffect(theme.colorSecondary.dark)};
    }

    &:active,
    &:hover {
        border-bottom-color: ${colorPrimaryHover};
        color: ${colorPrimaryHover};
    }

    &:active:after {
        ${rippleEffectReset()};
    }
`;

TabHeader.propTypes = {
    isActive: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    isFullWidth: PropTypes.bool.isRequired,
};

export const TabHeaderList = styled.div`
    ${textStyling(availableTextStyles().body2)};
    display: flex;
    flex-wrap: nowrap;
    border-bottom: 1px solid ${tabsHeaderListDividerColor};
`;

export const TabPanel = styled.div`
    ${textStyling(availableTextStyles().body2)};
`;

export const StyledTabs = styled.div`
    ${({ elevation }) => getElevation(elevation)};
`;

StyledTabs.propTypes = {
    elevation: PropTypes.oneOf(Object.values(ELEVATIONS)).isRequired,
};
