import { getThemeValue, themeModes } from '../../../styles/theme/theme';
import styled, { css } from 'styled-components';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import styledTheming from 'styled-theming';

const overlayOpacity = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => getThemeValue(theme, 'overlayOpacity', 0.4),
    [themeModes.dark]: 0.6,
    [themeModes.light]: 0.3,
});

export const StyledOverlay = styled.div`
    ${setBoxSizing()};
    display: flex;
    position: fixed;
    z-index: 1;
    overflow: auto;

    ${({ isFullscreen }) => isFullscreen && css`
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    `};

    ${({ height, isFullscreen, width }) => !isFullscreen && css`
        margin: auto;
        width: ${width};
        height: ${height};
    `};

    ${({ isVisible }) => isVisible && css`
        background-color: rgba(0, 0, 0, ${overlayOpacity});
    `};
`;

export default StyledOverlay;
