import defaultTheme from '../../../styles/theme/theme';
import { ELEVATIONS } from '../../../utils/constants';
import getElevation from '../../../styles/mixins/getElevation';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import validateThemePropTypes from '../../../utils/validators/validateThemePropTypes';

export const ButtonContainer = styled.div`
    margin-right: 15px;
`;

ButtonContainer.propTypes = {
    theme: PropTypes.shape({
        header: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
};

ButtonContainer.defaultProps = {
    theme: defaultTheme,
};

export const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction:row;
    align-self: center;
`;

ButtonsWrapper.propTypes = {
    theme: PropTypes.shape({
        header: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
};

ButtonsWrapper.defaultProps = {
    theme: defaultTheme,
};

export const Title = styled.div`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body1)};
    margin:auto;
    padding-left:12px;
    color: ${({ theme }) => theme.header.headerColor};
`;

Title.propTypes = {
    theme: PropTypes.shape({
        header: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
};

Title.defaultProps = {
    theme: defaultTheme,
};

export const RightContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-self: center;
    color: ${({ theme }) => theme.header.headerColor};
    margin-inline-start: auto;
`;

RightContainer.propTypes = {
    theme: PropTypes.shape({
        header: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
};

RightContainer.defaultProps = {
    theme: defaultTheme,
};

export const LeftContainer = styled.div`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body2)};
    display: flex;
    flex-wrap: nowrap;
    align-self: center;
    color: ${({ theme }) => theme.header.headerColor};
`;

LeftContainer.propTypes = {
    theme: PropTypes.shape({
        header: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
};

LeftContainer.defaultProps = {
    theme: defaultTheme,
};

export const StyledHeader = styled.div`
    ${({ elevation }) => getElevation(elevation)};
    display: flex;
    flex-direction:row;
    background: ${({ theme }) => theme.header.headerBackgroundColor};
    height: 52px;
    color: ${({ theme }) => theme.header.headerColor};
`;

StyledHeader.propTypes = {
    elevation: PropTypes.oneOf(Object.values(ELEVATIONS)).isRequired,
    theme: PropTypes.shape({
        header: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
};

StyledHeader.defaultProps = {
    theme: defaultTheme,
};
