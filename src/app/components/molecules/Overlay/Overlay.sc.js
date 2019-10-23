import styled, { css } from 'styled-components';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';

export const StyledOverlay = styled.div`
    ${setBoxSizing()};
    display: flex;
    position: fixed;
    z-index: 1;
    overflow: auto;

    ${({ height, isFullscreen, width }) => (isFullscreen ? css`
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    ` : css`
        margin: auto;
        width: ${width};
        height: ${height};
    `)};

    ${({ isVisible, theme }) => isVisible && css`
        background-color: ${theme.colorDark.dark};
        opacity: 0.4;
    `};
`;

export default StyledOverlay;
