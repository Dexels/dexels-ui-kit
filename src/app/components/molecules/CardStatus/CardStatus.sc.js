import {
    STATUS_INDICATOR_PLACEMENTS,
    STATUS_INDICATOR_SIZES,
    STATUS_INDICATOR_STATUSES,
} from '../../atoms/StatusIndicator/StatusIndicator.consts';
import Card from '../../atoms/Card/Card';
import getStatusIndicator from '../../../styles/mixins/getStatusIndicator';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeBasic } from '../../../styles/theming/themes/basic';
import { themePropTypes } from '../../../styles/theming/themes/propTypes';

export const StyledCardStatus = styled(Card)`
    ${({
        placement,
        size,
        status,
        theme,
    }) => getStatusIndicator(status, theme, placement, size)}
`;

StyledCardStatus.propTypes = {
    placement: PropTypes.oneOf(Object.values(STATUS_INDICATOR_PLACEMENTS)).isRequired,
    size: PropTypes.oneOf(Object.values(STATUS_INDICATOR_SIZES)).isRequired,
    status: PropTypes.oneOf(Object.values(STATUS_INDICATOR_STATUSES)).isRequired,
    theme: themePropTypes,
};

StyledCardStatus.defaultProps = {
    theme: themeBasic,
};

export default StyledCardStatus;
