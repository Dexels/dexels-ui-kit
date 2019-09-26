import { IconWrapperComponent, TextComponent } from '../_Consts/Components';
import styled, { css } from 'styled-components';
import { CHIP_DIRECTIONS } from './Chip.consts';
import defaultTheme from '../../../styles/theme/theme';
import PropTypes from 'prop-types';
// import { rippleEffect } from '../../../styles/transitions/rippleEffect';
import validateThemePropTypes from '../../../utils/validateThemePropTypes';

export const IconWrapper = IconWrapperComponent;

export const Text = TextComponent;

export const StyledChip = styled.button`
    appearance: none;
    display: flex;
    position: relative;
    flex-wrap: nowrap;
    align-items: center;
    outline: none;
    border-radius: ${({ theme }) => theme.chip.borderRadius};
    border: 1px solid ${({ theme }) => theme.chip.colorPrimary};
    background-color: ${({ theme }) => theme.chip.backgroundColor};
    cursor: pointer;
    padding: 8px;
    overflow: hidden;
    color: ${({ theme }) => theme.chip.colorPrimary};
    height: ${({ theme }) => theme.chip.height};
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().chip)};

    /* Direction styling */
    ${({ direction }) => direction === CHIP_DIRECTIONS.RTL && css`
        ${Text} {
            order: 1;
        }

        ${IconWrapper} {
            order: 2;
            margin: 0 0 0 6px;
        }
    `};

    /* isDisabled styling */
    ${({ isDisabled }) => isDisabled && css`
        pointer-events: none;
        color: ${({ theme }) => theme.chip.colorDisabled};
    `};

    /* selected styling */
    ${({ selected }) => !selected && css`
        background-color: ${({ theme }) => theme.chip.backgroundColorDeselected};
    `};

    &:after {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        transform: scale(10, 10);
        transition: transform .5s, opacity 1s;
        opacity: 0;
        background-image: radial-gradient(circle, blue 10%, transparent 10.01%);
        background-position: 50%;
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        content: '';
        pointer-events: none;
    }

    &:active,
    &:hover {
        background-color: ${({ theme, selected }) => selected && theme.chip.backgroundColorHover};
        background-color: ${({ theme, selected }) => !selected && theme.chip.backgroundColor};
        color: ${({ theme }) => theme.chip.colorHover};
    }

    &:active:after {
        transform: scale(0, 0);
        transition: none;
        opacity: .2;
    }
`;

export default StyledChip;

StyledChip.propTypes = {
    isDisabled: PropTypes.bool.isRequired,
    theme: PropTypes.shape({
        chip: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }).isRequired,
};

StyledChip.defaultProps = {
    theme: defaultTheme,
};
