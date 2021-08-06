import { setBoxSizing } from '../../../../styles/mixins/setBoxSizing';
import styled from 'styled-components';
import { themeBasic } from '../../../../styles/theming/themes/basic';

interface WrapperProps {
    isHeader: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
    ${setBoxSizing()}
    display: flex;
    background-color: ${({ isHeader, theme }): string => (isHeader ? 'transparant' : theme.shades.seven)};
    width: 100%;
    height: 100%;

    /* Positioning the checkbox */
    > div {
        width: 100%;
    }

    > div > div {
        width: 100%;
    }

    div > div {
        margin: auto;
    }
`;

Wrapper.defaultProps = {
    theme: themeBasic,
};
