import defaultTheme from '../../../styles/theme/theme';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const StyledInputPassword = styled.div`
    position: relative;
`;

export const VisibilitySwitch = styled.button`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().h2)};
    appearance: none;
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translate3d(0, -50%, 0);
    outline: none;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    padding: 4px 8px;
`;

VisibilitySwitch.propTypes = {
    theme: PropTypes.shape({
        availableTextStyles: PropTypes.func.isRequired,
        textStyling: PropTypes.func.isRequired,
    }).isRequired,
};

VisibilitySwitch.defaultProps = {
    theme: defaultTheme,
};
