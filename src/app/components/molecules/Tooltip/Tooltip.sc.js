import getElevation from '../../../styles/mixins/getElevation';
import getPlacement from '../../../styles/mixins/getPlacement';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import styled from 'styled-components';
import transitionEffect from '../../../styles/mixins/transitionEffect';

export const StyledTooltip = styled.div`
    ${setBoxSizing()}
    position: relative;

    &::after,
    &::before {
        /* This weird indent is a bug in ESLint */
        ${({ transitionDuration, transitionEasing }) => transitionEffect({
        duration: transitionDuration,
        easing: transitionEasing,
    })}
        position: absolute;
        visibility: hidden;
        opacity: 0;
        background-color: ${({ theme }) => theme.Secondary};
    }

    &::before {
        z-index: 2;
        content: '';
    }

    &::after {
        ${({ theme }) => theme.textStyling(theme.availableTextStyles().body2)}
        ${({ placement }) => getPlacement(placement)}
        ${({ elevation }) => getElevation(elevation)}
        z-index: 99999999;
        border-radius: 15px;
        padding: 4px 8px;
        text-align: center;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: ${({ theme }) => theme.colorTextContrast.primary};
        content: attr(data-tooltip);
    }

    &:hover {
        &::after,
        &::before {
            visibility: visible;
            opacity: 1;
        }
    }
`;

export default StyledTooltip;
