import styled, { css } from 'styled-components';
import setBoxSizing from '../../../../styles/mixins/setBoxSizing';

export const StyledPaginator = styled.div`
    ${setBoxSizing()};
    display: flex;
    position: fixed;
    z-index: 1;
    overflow: auto;
`;

export default StyledPaginator;
