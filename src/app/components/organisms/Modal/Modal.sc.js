import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import styled from 'styled-components';

export const StyledModal = styled.div`
    ${setBoxSizing()};
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    flex-direction: column;
    flex-wrap: nowrap;
    z-index:3;
    width: 100%;
    max-width: 1024px;
    height: 100%;
    left: calc((100% - 1024px)/2);
    animation: show .3s;

    @keyframes show {
        from{
            opacity: 0;
            transform: translateY(100%);
        } to{
            opacity: 1;
            transform: translateY(0%);
        }
    }
`;

export const HeaderWrapper = styled.header`
    position: relative;
    flex: 0 0 auto;
`;

export const Body = styled.div`
    flex: 1 1 auto;
    background-color: ${({ theme }) => theme.shades.one};
    padding: ${({ theme }) => theme.spacing(2)};
    overflow: auto;
`;
