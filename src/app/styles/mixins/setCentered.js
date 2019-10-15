import { css } from 'styled-components';

const setCentered = () => (css`
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
`);

export default setCentered;

