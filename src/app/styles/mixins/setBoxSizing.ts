import { css } from 'styled-components';

export const setBoxSizing = (boxSizing = 'border-box') => (css`
    box-sizing: ${boxSizing};

    * {
        box-sizing: ${boxSizing};
    }
`);

export default setBoxSizing;
