import {
    Placement,
    Status,
    StatusIndicatorSize,
} from '../../../types';
import { Card } from '../../atoms/Card/Card';
import getStatusIndicator from '../../../styles/mixins/getStatusIndicator';
import styled from 'styled-components';
import { themeBasic } from '../../../styles/theming/themes/basic';

interface StyledCardStatusProps {
    placement: Placement;
    status: Status;
}

export const StyledCardStatus = styled(Card)<StyledCardStatusProps>`
    ${({
        placement,
        status,
        theme,
    }) => getStatusIndicator(status, theme, placement, StatusIndicatorSize.SMALL)}
`;

StyledCardStatus.defaultProps = {
    theme: themeBasic,
};

export default StyledCardStatus;
