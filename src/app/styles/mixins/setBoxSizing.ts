import { css, FlattenSimpleInterpolation } from 'styled-components';

export const setBoxSizing = (boxSizing = 'border-box'): FlattenSimpleInterpolation => css`
    box-sizing: ${boxSizing};

    * {
        box-sizing: ${boxSizing};
    }
`;

export default setBoxSizing;
