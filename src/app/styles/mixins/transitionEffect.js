import { css } from 'styled-components';

const transitionEffect = (
    type = 'ease-in-out',
    duration = 0.4,
    delay = 0,
    property = 'all',
) => (property !== 'NONE' && css`
    transition: ${`${property} ${duration}s ${type.split('_').join('-').toLowerCase()} ${delay}s`};
`);

export default transitionEffect;
