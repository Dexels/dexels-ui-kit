import { css } from 'styled-components';

const transitionEffect = ({
    duration = 400,
    delay = 0,
    easing = 'ease-in-out',
    property = 'all',
} = {}) => (property !== 'NONE' && css`
    transition: ${`${property} ${duration}ms ${easing.split('_').join('-').toLowerCase()} ${delay}ms`};
`);

export default transitionEffect;
