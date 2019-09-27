import styled, { css } from 'styled-components';
import defaultTheme from '../../../styles/theme/theme';
import PropTypes from 'prop-types';
import rippleEffect from '../../../styles/mixins/rippleEffect';
import validateThemePropTypes from '../../../utils/validateThemePropTypes';

export const StyledChip = styled.button`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().chip)};
    appearance: none;
    display: flex;
    position: relative;
    flex-wrap: nowrap;
    align-items: center;
    outline: none;
    border: 1px solid ${({ theme }) => theme.chip.colorPrimary};
    border-radius: ${({ theme }) => theme.chip.borderRadius};
    background-color: ${({ theme }) => theme.chip.backgroundColorDeselected};
    cursor: pointer;
    padding: 8px;
    height: ${({ theme }) => theme.chip.height};
    overflow: hidden;
    color: ${({ theme }) => theme.chip.colorPrimary};

    ${({ isDisabled, theme }) => isDisabled && css`
        pointer-events: none;
        color: ${theme.chip.colorDisabled};
    `};

    ${({ isSelected, theme }) => isSelected && css`
        background-color: ${theme.chip.backgroundColor};
    `};

    &:after {
        ${({ theme }) => rippleEffect(theme.chip.colorRipple)}
    }

    &:active,
    &:hover {
        background-color: ${({ theme }) => theme.chip.backgroundColor};
        color: ${({ theme }) => theme.chip.colorHover};

        ${({ isSelected, theme }) => isSelected && css`
            background-color: ${theme.chip.backgroundColorHover};
        `};
    }

    &:active:after {
        transform: scale(0, 0);
        transition: none;
        opacity: .2;
    }
`;

StyledChip.propTypes = {
    isDisabled: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
    theme: PropTypes.shape({
        chip: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
};

StyledChip.defaultProps = {
    theme: defaultTheme,
};

export default StyledChip;
