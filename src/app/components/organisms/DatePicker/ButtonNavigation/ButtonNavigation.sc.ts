import styled, { css, SimpleInterpolation } from 'styled-components';
import { themeBasic } from '../../../../styles/theming/themes/basic';

interface StyledButtonNavigationProps {
    isNext?: boolean;
    isPrev?: boolean;
}

export const StyledButtonNavigation = styled.div<StyledButtonNavigationProps>`
    position: absolute;
    top: ${({ theme }): string => theme.spacing(2.5)};

    ${({ isNext }): SimpleInterpolation =>
        isNext &&
        css`
            right: 20px;
            transform: rotate(180deg);
        `}

    ${({ isPrev }): SimpleInterpolation =>
        isPrev &&
        css`
            left: 20px;
        `}
`;

StyledButtonNavigation.defaultProps = {
    theme: themeBasic,
};

export default StyledButtonNavigation;
