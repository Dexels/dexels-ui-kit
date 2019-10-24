import styled, { css } from 'styled-components';
import ButtonIcon from '../../ButtonIcon/ButtonIcon';
import setBoxSizing from '../../../../styles/mixins/setBoxSizing';

export const StyledPaginator = styled.div`
    ${setBoxSizing()};
    display: flex;
    position: fixed;
    z-index: 1;
    overflow: auto;
`;

export const StyledPagingButton = styled(ButtonIcon)`
    font-size: 24px;
`;
