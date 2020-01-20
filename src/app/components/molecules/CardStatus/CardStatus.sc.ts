import {
    Placements,
    Statuses,
} from '../../../types';
import { Card } from '../../atoms/Card/Card';
import getStatusIndicator from '../../../styles/mixins/getStatusIndicator';
import {
    STATUS_INDICATOR_SIZES,
} from '../../atoms/StatusIndicator/StatusIndicator.consts';
import styled from 'styled-components';
import { themeBasic } from '../../../styles/theming/themes/basic';

interface StyledCardStatusProps {
    placement: Placements;
    status: Statuses;
}

export const StyledCardStatus = styled(Card)<StyledCardStatusProps>`
    ${({
        placement,
        status,
        theme,
    }) => getStatusIndicator(status, theme, placement, STATUS_INDICATOR_SIZES.SMALL)}
`;

StyledCardStatus.defaultProps = {
    theme: themeBasic,
};

export default StyledCardStatus;
