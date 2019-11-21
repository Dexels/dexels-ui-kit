import { css } from 'styled-components';

export const transitionEffect = ({
    duration = 400,
    delay = 0,
    easing = 'ease',
    property = 'all',
} = {}) => (property !== 'NONE' && css`
    transition: ${`${property} ${duration}ms ${easing.split('_').join('-').toLowerCase()} ${delay}ms`};
`);

export const slideUpEffect = ({
    duration = 500,
    easing = 'ease',
    isVisible = false,
    property = 'all',
} = {}) => (property !== 'NONE' && css`
    transform: ${`translate3d(-50%, ${isVisible ? '0' : '100%'}, 0)`};
    transition: ${`${property} ${duration}ms ${easing.split('_').join('-').toLowerCase()}`};
`);

export const fadeInEffect = ({
    duration = 500,
    easing = 'ease',
    isVisible = false,
    property = 'all',
} = {}) => (property !== 'NONE' && css`
    transform: ${`translate3d(-50%, ${isVisible ? '-50%' : '-40%'}, 0)`};
    transition: ${`${property} ${duration}ms ${easing.split('_').join('-').toLowerCase()}`};
`);
