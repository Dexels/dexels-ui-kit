import { css, FlattenSimpleInterpolation } from 'styled-components';

export const setTruncate = (): FlattenSimpleInterpolation => css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export default setTruncate;
