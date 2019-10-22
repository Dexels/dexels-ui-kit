import { availableTextStyles, textStyling } from '../../../styles/theme/textStyles';
import styled, { css } from 'styled-components';
import rippleEffect from '../../../styles/mixins/rippleEffect';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import transitionEffect from '../../../styles/mixins/transitionEffect';

export const StyledChip = styled.button`
    ${setBoxSizing()};
    ${textStyling(availableTextStyles().body2)};
    ${({ transitionDuration, transitionEasing }) => transitionEffect({
        duration: transitionDuration,
        easing: transitionEasing,
    })};
    appearance: none;
    position: relative;
    outline: none;
    border: 1px solid ${({ theme }) => theme.colorDark.light};
    border-radius: 8px;
    background-color: transparent;
    cursor: pointer;
    padding: ${({ theme }) => `calc(${theme.spacingUnit} / 2) ${theme.spacingUnit}`};
    min-height: ${({ theme }) => `calc(${(theme.spacingUnit)} * 4)`};
    overflow: hidden;
    color: ${({ theme }) => theme.colorDark.light};

    ${({ isSelected }) => isSelected && css`
        background-color: ${({ theme }) => theme.colorMedium.main};
    `};

    ${({ isDisabled }) => isDisabled && css`
        pointer-events: none;
    `};

    &:after {
        ${({ theme }) => rippleEffect(theme.colorSecondary.main)};
    }

    &:active,
    &:hover {
        background-color: ${({ theme }) => theme.colorMedium.main};

        ${({ isSelected }) => isSelected && css`
            background-color: ${({ theme }) => theme.colorLight.dark};
        `};
    }

    &:active:after {
        transform: scale(0, 0);
        transition: none;
        opacity: .2;
    }
`;

export default StyledChip;
