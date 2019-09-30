import { css } from 'styled-components';

const transitionEffect = (
    property = 'all',
    type = 'ease-in-out',
    duration = 0.4,
    delay = 0,
) => (css`
    transition: ${`${property} ${duration}s ${type.split('_').join('-').toLowerCase()} ${delay}s`}
`);

export default transitionEffect;
