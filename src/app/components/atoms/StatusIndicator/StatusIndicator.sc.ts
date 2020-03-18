import {
    Placement,
    Status,
    StatusIndicatorSize,
} from '../../../types';
import styled, { css } from 'styled-components';
import { getStatusColor } from '../../../styles/mixins/getStatusColor';
import { getStatusIndicator } from '../../../styles/mixins/getStatusIndicator';
import { themeBasic } from '../../../styles/theming/themes/basic';

interface StyledStatusIndicatorProps {
    background?: string;
    placement: Placement;
    size: StatusIndicatorSize;
    status: Status;
}

export const StyledStatusIndicator = styled.div<StyledStatusIndicatorProps>`
    ${({
        placement,
        size,
        status,
        theme,
    }) => getStatusIndicator(status, theme, placement, size)}
    display: flex;
    align-items: stretch;
    border-radius: inherit;
    color: ${({ status, theme }) => getStatusColor(status, theme)};

    ${({ background, theme }) => css`
        background-color: ${background || theme.card.backgroundColor};
    `}
`;

StyledStatusIndicator.defaultProps = {
    theme: themeBasic,
};

export default StyledStatusIndicator;
