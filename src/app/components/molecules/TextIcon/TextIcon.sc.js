import defaultTheme from '../../../styles/theme/theme';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import styled from 'styled-components';
import validateThemePropTypes from '../../../utils/validators/validateThemePropTypes';

export const StyledTextIcon = styled.div`
    ${setBoxSizing()};
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body2)};
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 100%;
    background-color: ${({ theme }) => theme.textIcon.backgroundColor};
    padding: 8px;
    width: ${({ theme }) => theme.textIcon.size};
    height: ${({ theme }) => theme.textIcon.size};
    color: ${({ theme }) => theme.textIcon.colorDefault};
`;

StyledTextIcon.propTypes = {
    theme: PropTypes.shape({
        textIcon: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
};

StyledTextIcon.defaultProps = {
    theme: defaultTheme,
};

export default StyledTextIcon;
