import { css } from 'styled-components';

/* @TODO: use default theme color instead of hardcoded variant */
export const rippleEffect = (backgroundColor = '#FFFFFF') => (css`
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    transform: scale(10, 10);
    transition: transform .5s, opacity 1s;
    opacity: 0;
    background-image: ${`radial-gradient(circle, ${backgroundColor} 10%, transparent 10.01%)`};
    background-position: 50%;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    content: '';
    pointer-events: none;
`);

export const rippleEffectInit = () => (css`
    position: relative;
    overflow: hidden;
`);

export const rippleEffectReset = () => (css`
    transform: scale(0, 0);
    transition: none;
    opacity: .2;
`);
