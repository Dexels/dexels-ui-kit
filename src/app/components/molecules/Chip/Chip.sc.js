import styled, { css } from 'styled-components';
import defaultTheme from '../../../styles/theme/theme';
import PropTypes from 'prop-types';
import rippleEffect from '../../../styles/mixins/rippleEffect';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import transitionEffect from '../../../styles/mixins/transitionEffect';
import validateThemePropTypes from '../../../utils/validators/validateThemePropTypes';

export const StyledChip = styled.button`
    ${({ transitionDuration, transitionEasing }) => transitionEffect({
        duration: transitionDuration,
        easing: transitionEasing,
    })};
    ${setBoxSizing()};
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body2)};
    appearance: none;
    position: relative;
    outline: none;
    border: 1px solid ${({ theme }) => theme.chip.colorDefault};
    border-radius: 8px;
    background-color: ${({ theme }) => theme.chip.backgroundColorDeselected};
    cursor: pointer;
    padding: 3px 8px 4px 8px;
    height: 32px;
    overflow: hidden;
    color: ${({ theme }) => theme.chip.colorDefault};

    ${({ isSelected, theme }) => isSelected && css`
        background-color: ${theme.chip.backgroundColor};
    `};

    ${({ isDisabled, theme }) => isDisabled && css`
        pointer-events: none;
        color: ${theme.chip.colorDisabled};
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
