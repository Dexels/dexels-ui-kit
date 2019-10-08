import defaultTheme from '../../../styles/theme/theme';
import getElevation from '../../../styles/mixins/getElevation';
import { getStatus } from '../../../styles/mixins/getStatus';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import validateThemePropTypes from '../../../utils/validators/validateThemePropTypes';

export const StyledCardStatusWrapper = styled.div`
    ${({ elevation }) => getElevation(elevation)};
`;

export const StyledCardStatus = styled.div`
    ${({ status, statusPlacement, theme }) => getStatus(status, theme.statusIndicator.size, statusPlacement)};
`;

StyledCardStatus.propTypes = {
    theme: PropTypes.shape({
        cardNoResults: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
};

StyledCardStatus.defaultProps = {
    theme: defaultTheme,
};
