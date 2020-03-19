import { css, FlattenSimpleInterpolation } from 'styled-components';

export const setCentered = (): FlattenSimpleInterpolation => (css`
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
`);

export default setCentered;
