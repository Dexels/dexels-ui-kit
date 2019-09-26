import styled, { css } from 'styled-components';
import { CHIP_DIRECTIONS } from './Chip.consts';
import defaultTheme from '../../../styles/theme/theme';
import IconWrapper from '../../atoms/IconWrapper/IconWrapper';
import PropTypes from 'prop-types';
import rippleEffect from '../../../styles/mixins/rippleEffect';
import TextWrapper from '../../atoms/TextWrapper/TextWrapper';
import validateThemePropTypes from '../../../utils/validateThemePropTypes';

export const IconDiv = IconWrapper;

export const Text = TextWrapper;

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

        ${IconDiv} {
            order: 2;
            margin: 0 0 0 6px;
        }
    `};

    /* isDisabled styling */
    ${({ isDisabled }) => isDisabled && css`
        pointer-events: none;
        color: ${({ theme }) => theme.chip.colorDisabled};
    `};

    /* isSelected styling */
    ${({ isSelected }) => !isSelected && css`
        background-color: ${({ theme }) => theme.chip.backgroundColorDeselected};
    `};

    &:after {
        ${({ theme }) => rippleEffect(theme.chip.colorRipple)}
    }

    &:active,
    &:hover {
        background-color: ${({ theme, isSelected }) => isSelected && theme.chip.backgroundColorHover};
        background-color: ${({ theme, isSelected }) => !isSelected && theme.chip.backgroundColor};
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
    isSelected: PropTypes.bool,
    theme: PropTypes.shape({
        chip: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }).isRequired,
};

StyledChip.defaultProps = {
    theme: defaultTheme,
};
