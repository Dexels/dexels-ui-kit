import { css } from 'styled-components';

export const transitionEffect = ({
    duration = 400,
    delay = 0,
    easing = 'ease',
    property = 'all',
} = {}) => (css`
    transition: ${`${property} ${duration}ms ${easing} ${delay}ms`};
`);

export const slideUpEffect = ({
    duration = 500,
    easing = 'ease',
    isVisible = false,
    property = 'all',
} = {}) => (css`
    ${transitionEffect({
        duration,
        easing,
        property,
    })}
    transform: ${`translate3d(-50%, ${isVisible ? '0' : '100%'}, 0)`};
`);

export const fadeInEffect = ({
    duration = 500,
    easing = 'ease',
    isVisible = false,
    property = 'all',
} = {}) => (css`
    ${transitionEffect({
        duration,
        easing,
        property,
    })}
    transform: ${`translate3d(-50%, ${isVisible ? '-50%' : '-40%'}, 0)`};
`);
