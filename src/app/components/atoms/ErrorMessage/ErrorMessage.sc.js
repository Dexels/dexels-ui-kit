import basicTheme from '../../../styles/theming/themes/basic';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const StyledErrorMessage = styled.div`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().caption)};
    color: ${({ theme }) => theme.colorInvalid};
`;

StyledErrorMessage.propTypes = {
    theme: PropTypes.shape({
        availableTextStyles: PropTypes.func.isRequired,
        colorInvalid: PropTypes.string.isRequired,
        textStyling: PropTypes.func.isRequired,
    }),
};

StyledErrorMessage.defaultProps = {
    theme: basicTheme,
};

export default StyledErrorMessage;
