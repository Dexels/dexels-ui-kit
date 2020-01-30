import styled, { css } from 'styled-components';
import { themeBasic } from '../../../../styles/theming/themes/basic';

interface StyledButtonNavigationProps {
    isNext?: boolean;
    isPrev?: boolean;
}

export const StyledButtonNavigation = styled.div<StyledButtonNavigationProps>`
    position: absolute;
    top: ${({ theme }) => theme.spacing(2.5)};

    ${({ isNext }) => isNext && css`
        right: 20px;
        transform: rotate(180deg);
    `}

    ${({ isPrev }) => isPrev && css`
        left: 20px;
    `}
`;

StyledButtonNavigation.defaultProps = {
    isNext: false,
    isPrev: false,
    theme: themeBasic,
};

export default StyledButtonNavigation;
