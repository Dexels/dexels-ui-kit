import { css } from 'styled-components';

const rippleEffect = (
    css`
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        transform: scale(10, 10);
        transition: transform .5s, opacity 1s;
        opacity: 0;
        background-image: radial-gradient(circle, white 10%, transparent 10.01%);
        background-position: 50%;
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        content: '';
        pointer-events: none;
    `
);

export default rippleEffect;
