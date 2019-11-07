import { css } from 'styled-components';

const setTruncate = () => (css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`);

export default setTruncate;
