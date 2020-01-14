import getStatusColor from '../../../../styles/mixins/getStatusColor';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../../styles/mixins/setBoxSizing';
import StatusIndicator from '../../../atoms/StatusIndicator/StatusIndicator';
import styled from 'styled-components';
import { themeBasic } from '../../../../styles/theming/themes/basic';
import { themePropTypes } from '../../../../styles/theming/themes/propTypes';

export const StyledStatusCell = styled.div`
    ${setBoxSizing()}
    display: flex;
    height: 100%;
`;

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: ${({ theme }) => theme.spacing(1.5)};
    color: ${({ status, theme }) => getStatusColor(status, theme)};
    font-size: ${({ theme }) => theme.spacing(3)};
`;

IconWrapper.propTypes = {
    status: PropTypes.oneOf(Object.values(StatusIndicator.statuses)).isRequired,
    theme: themePropTypes,
};

IconWrapper.defaultProps = {
    theme: themeBasic,
};

export default StyledStatusCell;
