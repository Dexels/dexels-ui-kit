import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import styled from 'styled-components';

export const StyledModal = styled.div`
    ${setBoxSizing()}
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    flex-direction: column;
    flex-wrap: nowrap;
    z-index: 3;
    width: 100%;
    height: 100%;
    animation: show .3s;

    @keyframes show {
        from {
            transform: scale(0);
        } to {
            transform: scale(1);
        }
    }
`;

export const HeaderWrapper = styled.header`
    position: relative;
    flex: 0 0 auto;
`;

export const Body = styled.div`
    flex: 1 1 auto;
    background-color: ${({ theme }) => theme.shades.nine};
    padding: ${({ theme }) => theme.spacing(2)};
    overflow: auto;
`;
