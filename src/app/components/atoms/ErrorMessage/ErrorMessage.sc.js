import defaulTheme from '../../../styles/theme/theme';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const StyledErrorMessage = styled.div`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().caption)};
    color: ${({ theme }) => theme.errorMessage.color};
`;

StyledErrorMessage.propTypes = {
    theme: PropTypes.shape({
        availableTextStyles: PropTypes.func.isRequired,
        textStyling: PropTypes.func.isRequired,
    }).isRequired,
};

StyledErrorMessage.defaultProps = {
    theme: defaulTheme,
};

export default StyledErrorMessage;
