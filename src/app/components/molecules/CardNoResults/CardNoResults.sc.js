import defaultTheme from '../../../styles/theme/theme';
import getElevation from '../../../styles/mixins/getElevation';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import validateThemePropTypes from '../../../utils/validators/validateThemePropTypes';

export const StyledCardNoResults = styled.div`
    ${({ elevation }) => getElevation(elevation)};
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    background-color: ${({ theme }) => theme.cardNoResults.backgroundColor};
    padding: 24px;
`;

StyledCardNoResults.propTypes = {
    theme: PropTypes.shape({
        cardNoResults: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
};

StyledCardNoResults.defaultProps = {
    theme: defaultTheme,
};

export const Header = styled.div`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().h1)};
    margin: 0 0 16px;
    color: ${({ theme }) => theme.cardNoResults.colorHeader};
`;

Header.propTypes = {
    theme: PropTypes.shape({
        cardNoResults: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
};

Header.defaultProps = {
    theme: defaultTheme,
};

export const Title = styled.p`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().h3)};
    margin: 4px 4px 4px 0;
    color: ${({ theme }) => theme.cardNoResults.colorTitle};
`;

Title.propTypes = {
    theme: PropTypes.shape({
        cardNoResults: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
};

Title.defaultProps = {
    theme: defaultTheme,
};

export const Item = styled.p`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body1)};
    margin: 0 0 4px;
    color: ${({ theme }) => theme.cardNoResults.colorItem};
`;

Item.propTypes = {
    theme: PropTypes.shape({
        cardNoResults: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
};

Item.defaultProps = {
    theme: defaultTheme,
};

export const Left = styled.div`
    flex: 0 0 auto;
    margin-top: 4px; /* Correction for line-height Title element */
    width: 48px;
`;

Left.propTypes = {
    theme: PropTypes.shape({
        cardNoResults: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
};

Left.defaultProps = {
    theme: defaultTheme,
};

export const Right = styled.div`
    flex: 1 1 auto;
`;
