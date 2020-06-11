import styled, { css, SimpleInterpolation } from 'styled-components';
import { setBoxSizing } from '../../../../../styles/mixins/setBoxSizing';
import { themeBasic } from '../../../../../styles/theming/themes/basic';

interface StyledContentCellProps {
    isCurrency: boolean;
}

export const StyledContentCell = styled.div<StyledContentCellProps>`
    ${setBoxSizing()}
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().body2)}
    color: ${({ theme }): string => theme.colorTextBody.primary};

    ${({ isCurrency }): SimpleInterpolation =>
        isCurrency &&
        css`
            color: red;
        `}
`;

StyledContentCell.defaultProps = {
    theme: themeBasic,
};

export default StyledContentCell;
