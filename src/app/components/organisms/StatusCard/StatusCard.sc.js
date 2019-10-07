import defaultTheme from '../../../styles/theme/theme';
import getElevation from '../../../styles/mixins/getElevation';
import { getStatus } from '../../../styles/mixins/getStatus';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import validateThemePropTypes from '../../../utils/validators/validateThemePropTypes';

export const StyledStatusCardWrapper = styled.div`
    ${({ elevation }) => getElevation(elevation)};
`;

export const StyledStatusCard = styled.div`
    ${({ status, statusPlacement, theme }) => getStatus(status, theme.statusIndicator.size, statusPlacement)};
`;

StyledStatusCard.propTypes = {
    theme: PropTypes.shape({
        noResultsCard: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
};

StyledStatusCard.defaultProps = {
    theme: defaultTheme,
};
