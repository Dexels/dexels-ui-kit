import { rippleEffect, rippleEffectReset } from '../../../styles/mixins/rippleEffect';
import styled, { css } from 'styled-components';
import { themeBasic, themePropTypes } from '../../../styles/theming/themes/basic';
import { ELEVATIONS } from '../../../utils/constants';
import getElevation from '../../../styles/mixins/getElevation';
import PropTypes from 'prop-types';

export const StyledTabs = styled.div`
    ${({ elevation }) => getElevation(elevation)}
`;

StyledTabs.propTypes = {
    elevation: PropTypes.oneOf(Object.values(ELEVATIONS)).isRequired,
};

export const TabHeader = styled.button`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().h3)}
    appearance: none;
    position: relative;
    outline: none;
    border: 0;
    border-bottom: 2px solid ${({ theme }) => theme.shades.nine};
    background-color: ${({ theme }) => theme.shades.nine};
    cursor: pointer;
    padding: ${({ theme }) => theme.spacing(0, 3)};
    height: ${({ theme }) => theme.spacing(6)};
    overflow: hidden;
    text-align: center;
    color: ${({ theme }) => theme.colorText.primary};

    ${({ isFullWidth }) => isFullWidth && css`
        width: 100%;
    `}

    ${({ isActive, theme }) => isActive && css`
        border-bottom-color: ${theme.colorPrimary};
    `}

    ${({ isDisabled, theme }) => isDisabled && css`
        color: ${theme.colorDisabled};
        pointer-events: none;
    `}

    &:after {
        ${({ theme }) => rippleEffect(theme.colorSecondary)}
    }

    &:active,
    &:hover {
        border-bottom-color: ${({ theme }) => theme.colorSecondary};
        color: ${({ theme }) => theme.colorText.secondary};
    }

    &:active:after {
        ${rippleEffectReset()}
    }
`;

TabHeader.propTypes = {
    isActive: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    isFullWidth: PropTypes.bool.isRequired,
    theme: themePropTypes,
};

TabHeader.defaultProps = {
    theme: themeBasic,
};

export const TabHeaderList = styled.div`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body2)}
    display: flex;
    flex-wrap: nowrap;
    border-bottom: 1px solid ${({ theme }) => theme.shades.five};
`;

TabHeaderList.propTypes = {
    theme: themePropTypes,
};

TabHeaderList.defaultProps = {
    theme: themeBasic,
};

export const TabPanel = styled.div`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body2)}
`;

TabPanel.propTypes = {
    theme: themePropTypes,
};

TabPanel.defaultProps = {
    theme: themeBasic,
};
