import defaultTheme from '../../../styles/theme/theme';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import validateThemePropTypes from '../../../utils/validateThemePropTypes';

export const StyledTextIcon = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 50px;
    background-color: ${({ theme }) => theme.textIcon.backgroundColor};
    padding: 8px;
    width: ${({ theme }) => theme.textIcon.size};
    height: ${({ theme }) => theme.textIcon.size};
    color: ${({ theme }) => theme.textIcon.colorPrimary};
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().textIcon)};
`;

export default StyledTextIcon;

StyledTextIcon.propTypes = {
    text: PropTypes.string,
    theme: PropTypes.shape({
        textIcon: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }).isRequired,
};

StyledTextIcon.defaultProps = {
    theme: defaultTheme,
};
