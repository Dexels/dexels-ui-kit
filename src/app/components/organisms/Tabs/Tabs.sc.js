import { availableTextStyles, textStyling } from '../../../styles/theme/textStyles';
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
    ${textStyling(availableTextStyles().h3)};
    appearance: none;
    position: relative;
    outline: none;
    border: 0;
    border-bottom: 2px solid ${({ theme }) => theme.colorLight.light};
    background-color: ${({ theme }) => theme.colorLight.light};
    cursor: pointer;
    padding: 0 ${({ theme }) => `calc(${theme.spacingUnit} * 3)`};
    height: 48px;
    overflow: hidden;
    text-align: center;
    color: ${({ theme }) => theme.colorPrimary.dark};

    ${({ isFullWidth }) => isFullWidth && css`
        width: 100%;
    `};

    ${({ isActive, theme }) => isActive && css`
        border-bottom-color: ${theme.colorPrimary.dark};
    `};

    ${({ isDisabled, theme }) => isDisabled && css`
        pointer-events: none;
        color: ${theme.colorDisabled.main};
    `};

    &:after {
        ${({ theme }) => rippleEffect(theme.colorSecondary.dark)};
    }

    &:active,
    &:hover {
        border-bottom-color: ${({ theme }) => theme.colorSecondary.dark};
        color: ${({ theme }) => theme.colorSecondary.dark};
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
    border-bottom: 1px solid ${({ theme }) => theme.colorMedium.main};
`;

export const TabPanel = styled.div`
    ${textStyling(availableTextStyles().body2)};
`;
