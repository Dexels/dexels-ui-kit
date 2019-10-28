import { rippleEffect, rippleEffectReset } from '../../../styles/mixins/rippleEffect';
import styled, { css } from 'styled-components';
import { ELEVATIONS } from '../../../utils/constants';
import getElevation from '../../../styles/mixins/getElevation';
import PropTypes from 'prop-types';

export const StyledTabs = styled.div`
    ${({ elevation }) => getElevation(elevation)};
`;

StyledTabs.propTypes = {
    elevation: PropTypes.oneOf(Object.values(ELEVATIONS)).isRequired,
};

export const TabHeader = styled.button`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().h3)};
    appearance: none;
    position: relative;
    outline: none;
    border: 0;
    border-bottom: 2px solid ${({ theme }) => theme.shade9};
    background-color: ${({ theme }) => theme.shade9};
    cursor: pointer;
    padding: ${({ theme }) => theme.spacing(0, 3)};
    height: 48px;
    overflow: hidden;
    text-align: center;
    color: ${({ theme }) => theme.colorHeaderText.primary};

    ${({ isFullWidth }) => isFullWidth && css`
        width: 100%;
    `};

    ${({ isActive, theme }) => isActive && css`
        border-bottom-color: ${theme.colorPrimary};
    `};

    ${({ isDisabled, theme }) => isDisabled && css`
        pointer-events: none;
        color: ${theme.colorDisabled};
    `};

    &:after {
        ${({ theme }) => rippleEffect(theme.colorSecondary)};
    }

    &:active,
    &:hover {
        border-bottom-color: ${({ theme }) => theme.colorSecondary};
        color: ${({ theme }) => theme.colorSecondary};
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
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body2)};
    display: flex;
    flex-wrap: nowrap;
    border-bottom: 1px solid ${({ theme }) => theme.shade5};
`;

export const TabPanel = styled.div`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body2)};
`;
