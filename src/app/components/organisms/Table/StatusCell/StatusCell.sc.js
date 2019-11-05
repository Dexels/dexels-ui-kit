import { getStatusColor } from '../../../../styles/mixins/getStatusColor';
import PropTypes from 'prop-types';
import StatusIndicator from '../../../atoms/StatusIndicator/StatusIndicator';
import styled from 'styled-components';

export const StyledStatusCell = styled.div`
    height: 100%;
`;

export const IconWrapper = styled.div`
    padding: ${({ theme }) => theme.spacing(1.5)};
    color: ${({ status, theme }) => getStatusColor(status, theme)};
    font-size: ${({ theme }) => theme.spacing(3)};
`;

IconWrapper.propTypes = {
    status: PropTypes.oneOf(Object.values(StatusIndicator.statuses)).isRequired,
};

export default StyledStatusCell;
