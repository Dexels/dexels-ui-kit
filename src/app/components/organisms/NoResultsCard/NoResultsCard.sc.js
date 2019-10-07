import defaultTheme from '../../../styles/theme/theme';
import getElevation from '../../../styles/mixins/getElevation';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import validateThemePropTypes from '../../../utils/validators/validateThemePropTypes';

export const Header = styled.div`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().h1)};
    margin-bottom: 16px;
    color: ${({ theme }) => theme.noResultsCard.colorHeader};
`;

Header.propTypes = {
    theme: PropTypes.shape({
        noResultsCard: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
};

Header.defaultProps = {
    theme: defaultTheme,
};

export const Title = styled.div`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body1)};
    font-family: ${({ theme }) => theme.noResultsCard.fontFamilyTitle};
    margin: 4px;
    color: ${({ theme }) => theme.noResultsCard.colorTitle};
`;

Title.propTypes = {
    theme: PropTypes.shape({
        noResultsCard: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
};

Title.defaultProps = {
    theme: defaultTheme,
};

export const Item = styled.div`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body2)};
    padding-bottom: 4px;
    color: ${({ theme }) => theme.noResultsCard.colorItem};
`;

Item.propTypes = {
    theme: PropTypes.shape({
        noResultsCard: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
};

Item.defaultProps = {
    theme: defaultTheme,
};

export const Left = styled.div`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().h1)};
    width: 48px;
    color: ${({ theme }) => theme.noResultsCard.colorHeader};
`;

Left.propTypes = {
    theme: PropTypes.shape({
        noResultsCard: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
};

Left.defaultProps = {
    theme: defaultTheme,
};

export const Right = styled.div`
    /* display: flex; */
    width: 100%;
`;

export const StyledNoResultsCard = styled.div`
    ${({ elevation }) => getElevation(elevation)};
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: flex-start;
    background-color: ${({ theme }) => theme.noResultsCard.backgroundColor};
    padding: ${({ theme }) => theme.noResultsCard.padding};
    width: ${({ width }) => width};
    height: ${({ height }) => height};
`;

StyledNoResultsCard.propTypes = {
    theme: PropTypes.shape({
        noResultsCard: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
};

StyledNoResultsCard.defaultProps = {
    theme: defaultTheme,
};
