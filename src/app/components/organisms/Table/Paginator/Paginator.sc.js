import styled, { css } from 'styled-components';
import setBoxSizing from '../../../../styles/mixins/setBoxSizing';

export const StyledPaginator = styled.div`
    ${setBoxSizing()};
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body2)};
    display: flex;
    flex-direction: row;
    padding-top: ${({ theme }) => theme.spacing(1)};
    width: 100%;
    color: ${({ theme }) => theme.colorHeaderText.primary};
    /* display: flex;
    position: fixed;
    z-index: 1;
    overflow: auto; */
`;

export default StyledPaginator;
